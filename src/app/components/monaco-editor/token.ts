import { InjectionToken } from "@angular/core";
import { IMonacoEditorConfig } from "./interfaces/monaco.interfaces";

export const MONACO_EDITOR_CONFIG: InjectionToken<IMonacoEditorConfig> = new InjectionToken('MONACO_EDITOR_CONFIG');