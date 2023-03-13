import { Uri } from "monaco-editor";

export interface IMarker {
    id?: string;
    owner: string;
    resource: Uri;
    severity: MarkerSeverity;
    severityText?: string;
    code?: string | {
        value: string;
        target: Uri;
    };
    message: string;
    source?: string;
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
    relatedInformation?: IRelatedInformation[];
    tags?: MarkerTag[];
    selected?: boolean;
}

export enum MarkerTag {
    Unnecessary = 1,
    Deprecated = 2
}

export enum MarkerSeverity {
    Hint = 1,
    Info = 2,
    Warning = 4,
    Error = 8
}

export interface IRelatedInformation {
    resource: Uri;
    message: string;
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
}