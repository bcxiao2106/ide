/// <reference path="monaco.d.ts" />

export interface IMonacoEditorOptions extends MonacoEditorConstructionOptions {
    theme: string;
    language: string;
    [key: string]: any;
}
export interface IMonacoEditor {
    options: IMonacoEditorOptions;
    uri?: string;
    monitorStoreChanges?: boolean;
    dataModelId?: string;
    path?: string;
    code?: string;
    onChangeCallback?: (code: string) => void;
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
export type MonacoEditorUri = monaco.Uri;
export type MonacoStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
export type MonacoStandaloneDiffEditor = monaco.editor.IStandaloneDiffEditor;

export interface IMonacoEditorConfig {
    baseUrl?: string;
    defaultOptions?: {
        [key: string]: any;
    };
    onMonacoLoad?: Function;
}
