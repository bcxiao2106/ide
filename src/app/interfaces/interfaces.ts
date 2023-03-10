export interface ISection {
    title: string;
    component: string;
    config?: any;
    isExpanded?: boolean;
}
export interface ITreeNode {
    id: string;
    viewId: string;
    level?: number;
    text: string;
    uri?: string;
    path?: string[];
    children?: string[];
    order?: number;
    icon?: string;
    isExpanded?: boolean;
    parent?: string;
}
export interface ITab {
    id: string;
    text: string;
    changed?: boolean;
    focused?: boolean;
    component?: string;
    attachedConfig?: any;
}
export interface IEditorTab extends ITab {
    group: number;
    isPreview?: boolean;
}
export interface IThemesConfig {
    themes: string[];
    default: string;
    map: Record<string, Record<string, string>>;
}