import { Injectable } from "@angular/core";
import { ITreeNode } from "../interfaces/interfaces";

@Injectable()
export class TreeViewService {
    private map: Map<string, ITreeNode> = new Map<string, ITreeNode>();

    constructor() {}

    set(node: ITreeNode) {
        this.map.set(node.id, node);
    }

    setRange(nodes: ITreeNode[]) {
        nodes && Array.isArray(nodes) && nodes.forEach(node => {
            this.set(node);
        });
    }

    get(id: string): ITreeNode | undefined {
        return this.map.get(id);
    }
}