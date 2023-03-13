// import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Injector, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
// import { filter, take } from 'rxjs/operators';
// import { IModeledEditorComponent } from './interfaces/monaco-editors.interfaces';
// import { IEditorConfig, IMonacoJsonSchemaOptions, MonacoEditorConstructionOptions, MonacoStandaloneCodeEditor, OnChangeEvent } from './interfaces/monaco.interfaces';
// import { MonacoEditorLoaderService } from './monaco-editor-loader.service';

// @Component({
//   selector: 'monaco-editor',
//   template: `<div #container class="editor-container"><div #editor class="monaco-editor"></div></div>`,
//   styles: [`
//     .monaco-editor {
//       position: absolute;
//       top: 0;
//       bottom: 0;
//       left: 0;
//       right: 0;
//       width: 100% !important;
//       height: 100% !important;
//     }
//     .editor-container {
//       overflow: hidden;
//       position: relative;
//       display: table;
//       width: 100%;
//       height: 100%;
//       min-width: 0;
//     }
//   `],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class ModeledEditorComponent implements IModeledEditorComponent, OnInit, OnDestroy {
//   @ViewChild('editor', { static: true }) editorContent: ElementRef<any>;
//   @Input() config: IEditorConfig;
//   @Output() onInit: EventEmitter<IModeledEditorComponent> = new EventEmitter();
//   @Output() onChange: EventEmitter<OnChangeEvent> = new EventEmitter();
//   @Output() onTouch: EventEmitter<unknown> = new EventEmitter();
//   @Output() onModelDecorations: EventEmitter<monaco.editor.IMarker[]> = new EventEmitter();
//   public editor: MonacoStandaloneCodeEditor;

//   get model(): monaco.editor.ITextModel {
//     return this.editor && this.editor.getModel()!;
//   }
//   set model(model: monaco.editor.ITextModel) {
//     this.editor.setModel(model);
//   }
//   set options(options: monaco.editor.IEditorOptions) {
//     this.editor.updateOptions(options);
//   }
//   get markers() {
//     return this.model && monaco.editor.getModelMarkers({
//       resource: this.model.uri
//     });
//   }

//   // DI
//   private _monacoLoader: MonacoEditorLoaderService;
//   private get monacoLoader(): MonacoEditorLoaderService {
//     !this._monacoLoader && (this._monacoLoader = this.ngInjector.get(MonacoEditorLoaderService));
//     return this._monacoLoader;
//   }

//   constructor(private ngInjector: Injector) { }

//   ngOnInit(): void {
//     this.monacoLoader.isMonacoLoaded$.pipe(
//       filter(isLoaded => isLoaded),
//       take(1)
//     ).subscribe(() => this.initEditor());
//   }
//   ngAfterViewInit(): void { }
//   ngOnDestroy(): void {
//     this.editor && this.editor.dispose();
//   }

//   setJsonDiagnosticsOptions(options: IMonacoJsonSchemaOptions): void {
//     monaco.languages.json.jsonDefaults.setDiagnosticsOptions(options);
//   }

//   addTypescrtiptExtraLib(content: string, filePath: string): void {
//     //! FIXME :: add the return on addExtraLib to Disposable collection to remove loaded libs from global instance.
//     monaco.languages.typescript.typescriptDefaults.addExtraLib(content, filePath);
//   }

//   private initEditor() {
//     const defaultOptions: MonacoEditorConstructionOptions = {
//       language: 'text',
//       automaticLayout: true,
//       scrollBeyondLastLine: true,
//       theme: 'vs-dark',
//       minimap: { enabled: false },
//     };

//     this.editor = monaco.editor.create(this.editorContent.nativeElement, this.config.options ? { ...defaultOptions, ...this.config.options } : defaultOptions);
//     if (this.config.model) this.model = this.config.model;
//     if (this.config.jsonDiagnosticsOptions) this.setJsonDiagnosticsOptions(this.config.jsonDiagnosticsOptions);
//     this.registerEditorListeners();
//     this.onInit && this.onInit.emit(this);
//   }

//   private registerEditorListeners() {
//     this.editor.onDidChangeModelContent(() => this.onChange && this.onChange.emit({ value: this.editor.getValue(), uri: this.model.uri.toString(true) }));
//     this.editor.onDidChangeModelDecorations(() => this.onModelDecorations && this.onModelDecorations.emit(this.markers));
//     this.editor.onDidBlurEditorText(() => this.onTouch && this.onTouch.emit(null));
//   }
// }
