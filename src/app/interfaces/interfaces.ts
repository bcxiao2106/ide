export interface ISection {
    title: string;
    component: string;
    config?: any;
    isExpanded?: boolean;
}
export interface ITreeNode {
    id: string;
    level?: number;
    text: string;
    children?: string[];
    order?: number;
    icon?: string;
    isExpanded?: boolean;
    parent?: string;
}
export interface IEditorTab {
    id: string;
    text: string;
    group: number;
    isPreview?: boolean;
    changed?: boolean;
    focused?: boolean;
    attachedConfig?: any;
}