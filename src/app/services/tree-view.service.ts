import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ITreeNode } from "../interfaces/interfaces";
import { TreeView } from '../classes/tree-view.class';

@Injectable()
export class TreeViewService {
    private map: Map<string, TreeView> = new Map<string, TreeView>();

    constructor() {}

    register(viewId: string) {
        this.map.set(viewId, new TreeView(viewId));
    }

    deregister(viewId: string) {
        this.map.delete(viewId);
    }

    getSelected$(viewId: string): Observable<ITreeNode> {
        return this.map.get(viewId)?.selected$!;
    }

    set(node: ITreeNode) {
        if(!node) return;
        this.map.get(node.viewId)?.set(node);
    }

    has(viewId: string, id: string): boolean {
        return this.map.get(viewId)?.has(id)!;
    }

    setRange(nodes: ITreeNode[]) {
        nodes && Array.isArray(nodes) && nodes.forEach(node => {
            this.set(node);
        });
    }

    get(viewId: string, id: string): ITreeNode | any {
        return this.map.get(viewId)?.get(id);
    }

    select(viewId: string, id: string | undefined) {
        viewId && id && this.map.get(viewId)?.select(id);
    }

    appendChild(viewId: string, parentNodeId: string, node: ITreeNode) {
        this.map.get(viewId)?.appendChild(parentNodeId, node);
    }
}