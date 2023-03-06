import { Component, ElementRef, EventEmitter, forwardRef, Inject, Injector, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Subscription, filter, take } from 'rxjs';
import {IMonacoEditor, IMonacoJsonSchemaOptions, MonacoEditorConstructionOptions, MonacoStandaloneCodeEditor} from './interfaces/interfaces';
import { MonacoEditorLoaderService } from './monaco-editor-loader.service';

@Component({
  selector: 'monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonacoEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MonacoEditorComponent),
      multi: true,
    }
  ]
})
export class MonacoEditorComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor, Validator {
  @Input('config') config!: IMonacoEditor;
  @Output() onInit: EventEmitter<MonacoStandaloneCodeEditor> = new EventEmitter();
  @ViewChild('editor', { static: true }) editorContent!: ElementRef;

  timer: any;
  editor!: MonacoStandaloneCodeEditor;
  modelUriInstance!: monaco.editor.ITextModel;
  value: string = '';
  parsedError!: string;
  subscription: Subscription = new Subscription();

  private onTouched: () => void = () => { };
  private onErrorStatusChange: () => void = () => { };
  private propagateChange: (_: any) => any = () => { };

  get model() {
    return this.editor && this.editor.getModel();
  }
  get modelMarkers() {
    return this.model && monaco.editor.getModelMarkers({
      resource: this.model.uri
    });
  }

  private _monacoLoader!: MonacoEditorLoaderService;
  public get monacoLoader(): MonacoEditorLoaderService {
    !this._monacoLoader && (this._monacoLoader = this.ngInjector.get(MonacoEditorLoaderService));
    return this._monacoLoader;
  }
  public set monacoLoader(v: MonacoEditorLoaderService) {
    this._monacoLoader = v;
  }

  constructor(@Inject(Injector) private ngInjector: Injector) { }

  ngOnInit(): void {
    if (!this.config.interactionDebounceTime) this.config.interactionDebounceTime = 2000;
    this.writeValue(this.config?.code!);
    this.monacoLoader.isMonacoLoaded$.pipe(
      filter(isLoaded => isLoaded),
      take(1)
    ).subscribe(() => this.initEditor());
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void {
    this.flushModelChanges();
    this.timer && clearTimeout(this.timer);
    this.editor && this.editor.dispose();
    this.subscription && this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.editor && changes['config'] && !changes['config'].firstChange) {
      const
        {
          uri: toUriStr,
          options, options: { language: toLanguage, theme: toTheme },
        } = changes['config'].currentValue as IMonacoEditor,
        {
          uri: fromUriStr,
          options: { language: fromLanguage, theme: fromTheme }
        } = changes['config'].previousValue as IMonacoEditor;

      fromTheme !== toTheme && monaco.editor.setTheme(toTheme);
      fromLanguage !== toLanguage
        && monaco.editor.setModelLanguage(this.editor?.getModel()!, this.config.options
          && this.config.options.language
          ? this.config.options.language
          : 'text'
        );

      if (fromUriStr && !toUriStr || !fromUriStr && toUriStr || toUriStr && fromUriStr && toUriStr !== fromUriStr) {
        let existingModel: monaco.editor.ITextModel;
        const value = this.editor.getValue(),
          fromUri = monaco.Uri.parse(fromUriStr!),
          toUri = monaco.Uri.parse(toUriStr!);

        this.modelUriInstance && this.modelUriInstance.dispose();
        toUriStr && (existingModel = (monaco.editor.getModels().find((model) => model.uri.path === toUri.path))!);
        this.modelUriInstance = existingModel!
          ? existingModel
          : monaco.editor.createModel(value, this.config.options && this.config.options.language, toUri);

        this.editor.setModel(this.modelUriInstance);
      }
      this.editor.updateOptions(options);
    }
  }

  flushModelChanges() {
    // if (this.config.dataModelId && this.config.path) {
    //   const path: string[] = this.config.path.split('.');
    //   if (this.config.code != this.dms.getIn(this.config.dataModelId, path))
    //     this.dms.setIn(this.config.dataModelId, path, this.config.code);
    // }
  }

  writeValue(value: string): void {
    this.value = value;
    this.config.code = value;
    if (this.editor && value) this.editor.setValue(value);
    else if (this.editor) this.editor.setValue('');
  }

  setJsonDiagnosticsOptions(options: IMonacoJsonSchemaOptions): void {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions(options);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(): any {
    return !this.parsedError ? null : {
      monaco: {
        value: (this.parsedError?.split('|')),
      }
    };
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onErrorStatusChange = fn;
  }

  private initEditor() {
    const options: MonacoEditorConstructionOptions = {
      value: [this.value].join('\n'),
      language: 'text',
      automaticLayout: true,
      scrollBeyondLastLine: false,
      theme: 'vs-dark'
    };

    this.editor = monaco.editor.create(
      this.editorContent.nativeElement,
      this.config.options ? { ...options, ...this.config.options } : options
    );

    if (this.config.uri && !this.modelUriInstance) {
      const uri = monaco.Uri.parse(this.config.uri),
        existingModel = monaco.editor.getModels().find((model) => model.uri.path === uri.path);

      if (this.config.jsonDiagnosticsOptions) this.setJsonDiagnosticsOptions(this.config.jsonDiagnosticsOptions);
      if (!existingModel) {
        this.modelUriInstance = monaco.editor.createModel(this.value, this.config.options.language || 'text', uri);
        this.editor.setModel(this.modelUriInstance);
      }


    }

    this.registerEditorListeners();
    this.onInit.emit(this.editor);
  }

  registerEditorListeners() {
    this.editor.onDidChangeModelContent(() => {
      if (this.config.options.readOnly == true) return;
      const currentState = this.editor.getValue();
      this.config.code = currentState;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => this.flushModelChanges(), this.config.interactionDebounceTime);
      this.propagateChange(this.editor.getValue());
    });

    this.editor.onDidChangeModelDecorations(() => {
      const currentParsedError = this.modelMarkers?.map(({ message }) => message).join('|');
      const hasValidationStatusChanged = this.parsedError !== currentParsedError;

      if (hasValidationStatusChanged) {
        this.parsedError = currentParsedError!;
        this.onErrorStatusChange();
      }
    });

    this.editor.onDidBlurEditorText(() => this.onTouched());
  }
}