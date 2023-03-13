import { Observable, Subject } from "rxjs";
import { ITreeNode } from "../interfaces/interfaces";

export class TreeView {
    id: string;
    private map: Map<string, ITreeNode> = new Map<string, ITreeNode>();
    private selected: Subject<ITreeNode> = new Subject<ITreeNode>();
    selected$: Observable<ITreeNode>;

    constructor(_id: string) {
        this.id = _id;
        this.selected$ = this.selected.asObservable();
    }

    set(node: ITreeNode) {
        if(!node) return;
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

    has(id: string): boolean {
        return this.map.has(id);
    }

    select(id: string | undefined) {
        id && this.selected.next(this.map.get(id)!);
    }

    appendChild(parentNodeId: string, node: ITreeNode) {
        if(this.map.has(parentNodeId) && !this.map.get(parentNodeId)?.children?.includes(node.id)) {
            this.map.get(parentNodeId)?.children?.push(node.id);
        }
        this.set(node);
    }
}