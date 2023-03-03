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
    children?: ITreeNode[];
    order?: number;
    icon?: string;
}