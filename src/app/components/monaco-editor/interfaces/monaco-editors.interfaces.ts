import { EventEmitter } from "@angular/core";
import { ValidationErrors } from "@angular/forms";
import { IEditorConfig, IMonacoEditorConfig, IMonacoJsonSchemaOptions, MonacoStandaloneCodeEditor, OnChangeEvent } from "./monaco.interfaces";

export interface IModeledEditorComponent {
  config: IEditorConfig;
  options: monaco.editor.IEditorOptions;
  onInit: EventEmitter<IModeledEditorComponent>;
  onChange: EventEmitter<OnChangeEvent>;
  onTouch: EventEmitter<unknown>;
  onModelDecorations: EventEmitter<monaco.editor.IMarker[]>;
  model: monaco.editor.ITextModel;
  markers: monaco.editor.IMarker[];
  editor: MonacoStandaloneCodeEditor;
  setJsonDiagnosticsOptions(options: IMonacoJsonSchemaOptions): void;
  addTypescrtiptExtraLib(content: string, filePath: string): void;
}

export interface IMonacoEditorComponent {
  config: IMonacoEditorConfig;
  onInit: EventEmitter<MonacoStandaloneCodeEditor>;
  model: monaco.editor.ITextModel;
  modelMarkers: monaco.editor.IMarker[];
  instance: MonacoStandaloneCodeEditor;
  modelUriInstance: monaco.editor.ITextModel;
  writeValue(value: string): void;
  setJsonDiagnosticsOptions(options: IMonacoJsonSchemaOptions): void;
  addTypescrtiptExtraLib(content: string, filePath: string): void;
  registerOnChange(fn: (value: string, uri?: string) => void): void;
  registerOnTouched(fn: () => void): void;
  validate(): ValidationErrors;
  registerOnValidatorChange?(fn: () => void): void;
  switchModel(config: IMonacoEditorConfig): void;
}
