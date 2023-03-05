import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IEditorTab, ITreeNode } from "../interfaces/interfaces";

@Injectable()
export class EditorsManagerService {
    private groupId: number = 0;
    public activeGroup: number = 0;
    private map: Map<number, IEditorTab[]>;
    private subject: Subject<number>;
    public change$: Observable<number>;

    constructor() {
        this.map = new Map<number, IEditorTab[]>();
        this.subject = new Subject()
        this.change$ = this.subject.asObservable();
        this.addGroup();
    }

    open(node: ITreeNode) {
        let tabs: IEditorTab[] | undefined = this.map.get(this.activeGroup);
        (!tabs?.find(tab => tab.id == node.id)) && tabs?.push({
            id: node.id,
            text: node.text,
            group: this.activeGroup
        });
        this.map.set(this.activeGroup, tabs!);
        this.subject.next(this.activeGroup);
    }

    activate(id: string) {

    }

    remove(id: string) {
        let tabs: IEditorTab[] | undefined = this.map.get(this.activeGroup);
        let index: number | undefined = tabs?.findIndex(tab => tab.id == id);
        if(index) tabs = tabs?.splice(index, 1);
        this.map.set(this.activeGroup, tabs!);
    }

    addGroup() {
        if (this.groupId == 2) return;
        this.activeGroup = this.groupId;
        this.groupId++;
        this.map.set(this.activeGroup, []);

    }

    get(groupId: number): IEditorTab[] | undefined {
        return this.map.get(groupId);
    }
}