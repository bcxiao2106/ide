import { IMonacoEditorGlobalConfig } from "./interfaces/monaco.interfaces";

export const defaultMonacoConfig: IMonacoEditorGlobalConfig = {
  // configure base path cotaining monaco-editor directory after build default: './assets'
  // baseUrl: (window['__cdnPath'] ? window['__cdnPath'] : "./") + "assets/monaco/vs",
  baseUrl: "assets/monaco/min/vs",
  // pass default options to be used
  defaultOptions: { scrollBeyondLastLine: true },
};
