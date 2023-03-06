/// <reference path="monaco.d.ts" />

export type EventTarget<T> = (arg: T) => void;
export interface IMonacoEditorOptions extends MonacoEditorConstructionOptions {
  theme: string;
  language: string;
  [key: string]: any;
}
export type IMonacoEditorConfig = IMonacoUnmodeledEditorConfig;
export type IEditorConfig = IMonacoModeledEditorConfig;
export interface IMonacoUnmodeledEditorConfig {
  options: IMonacoEditorOptions;
  uri?: string;
  dataModelId?: string;
  path?: string;
  code?: string;
  onChangeCallback?: (code: string) => void;
  interactionDebounceTime?: number;
  jsonDiagnosticsOptions?: IMonacoJsonSchemaOptions;
}
export interface IMonacoModeledEditorConfig {
  options: MonacoEditorConstructionOptions;
  model?: monaco.editor.ITextModel;
  interactionDebounceTime?: number;
  jsonDiagnosticsOptions?: IMonacoJsonSchemaOptions;
}
export interface IMonacoJsonSchemaOptions {
  validate: boolean,
  schemas: Array<IMonacoJsonSchema>;
}
export interface IMonacoJsonSchema {
  uri: string,
  fileMatch: Array<string>,
  schema: object
}

export type MonacoEditorConstructionOptions = monaco.editor.IStandaloneEditorConstructionOptions;
export interface MonacoDiffEditorConstructionOptions extends monaco.editor.IDiffEditorConstructionOptions {
  theme: string;
}
export type MonacoEditorTextModel = monaco.editor.ITextModel;
export type MonacoEditorUri = monaco.Uri;
export type MonacoStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
export type MonacoStandaloneDiffEditor = monaco.editor.IStandaloneDiffEditor;

export interface IMonacoEditorGlobalConfig {
  baseUrl?: string;
  defaultOptions?: {
    [key: string]: any;
  };
  onMonacoLoad?: Function;
}
export interface OnChangeEvent {
  uri?: string;
  value?: string;
}
