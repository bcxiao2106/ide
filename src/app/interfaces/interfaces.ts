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
}