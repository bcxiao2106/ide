import { Observable, Subject } from "rxjs";
import { ITreeNode } from "../interfaces/interfaces";

export class TreeView {
    id: string;
    private map: Map<string, ITreeNode> = new Map<string, ITreeNode>();
    private selected: Subject<ITreeNode> = new Subject<ITreeNode>();
    private nodes: ITreeNode[];
    selected$: Observable<ITreeNode>;

    constructor(_id: string, nodes: ITreeNode[]) {
        this.id = _id;
        this.setRange(nodes);
        this.nodes = this.initTreeNodes(nodes);
        this.selected$ = this.selected.asObservable();
    }

    set(node: ITreeNode) {
        if (!node) return;
        this.map.set(node.id, node);
    }

    setRange(nodes: ITreeNode[]) {
        nodes && Array.isArray(nodes) && nodes.forEach(node => {
            this.set(node);
        });
    }

    get(id: string): ITreeNode | any {
        return this.map.get(id);
    }

    getTree(): ITreeNode[] {
        return this.nodes;
    }

    has(id: string): boolean {
        return this.map.has(id);
    }

    select(id: string | undefined) {
        id && this.selected.next(this.map.get(id)!);
    }

    appendChild(parentNodeId: string, node: ITreeNode) {
        if (this.map.has(parentNodeId) && !this.map.get(parentNodeId)?.children?.includes(node.id)) {
            this.map.get(parentNodeId)?.children?.push(node.id);
        }
        this.set(node);
    }

    toggleExpanded(node: ITreeNode): ITreeNode[] {
        let index: number = this.nodes.findIndex(n => n.id === node.id) + 1;
        let children: ITreeNode[] = [];
        if(node.isExpanded) {//to collapse
            this.getDisplayedChildren(node, children);
            let len: number = children.length || 0;
            this.nodes.splice(index, len);
            node.isExpanded = false;
        } else {//to expand
            node.isExpanded = true;
            this.getDisplayedChildren(node, children);
            this.nodes.splice(index, 0, ...children);
        }
        return [...this.nodes];
    }

    private initTreeNodes(nodes: ITreeNode[]): ITreeNode[] {
        let tree: ITreeNode[] = [];
        nodes[0] && nodes[0].children?.forEach(id => {
            tree.push(this.get(id));
        });
        return tree;
    }

    private getDisplayedChildren(node: ITreeNode, displayed: ITreeNode[]) {
        if(!node.isExpanded) return;
        if(!node.children || node.children.length == 0) return;
        node.children.forEach(id => {
            let childNode = this.get(id);
            displayed.push(childNode);
            return this.getDisplayedChildren(childNode, displayed);
        });
    }
}
