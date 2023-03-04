import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ITreeNode } from "../interfaces/interfaces";

@Injectable()
export class TreeViewService {
    private map: Map<string, ITreeNode> = new Map<string, ITreeNode>();
    private selected: Subject<string> = new Subject<string>();
    selected$: Observable<string>;

    constructor() {
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

    select(id: string | undefined) {
        id && this.selected.next(id);
    }
}