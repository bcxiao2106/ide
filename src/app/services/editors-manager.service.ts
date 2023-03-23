import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { CODE } from "../config/csharp.code";
import { IEditorTab, ITreeNode } from "../interfaces/interfaces";
import { ThemesService } from "./themes.service";
import { IMarker } from '../interfaces/monaco-marker.interface';
import { EditorType } from "../interfaces/enums";

@Injectable()
export class EditorsManagerService {
  private groupId: number = 0;
  public activeGroup: number = 0;
  private map: Map<number, IEditorTab[]>;
  private editorsMap: Map<string, any>;
  private subject: Subject<number>;
  public change$: Observable<number>;
  private markers: BehaviorSubject<IMarker[]>;
  public markersStream$: Observable<IMarker[]>;
  private monacoInitialized: boolean = false;

  constructor(private themeService: ThemesService) {
    this.map = new Map<number, IEditorTab[]>();
    this.editorsMap = new Map<string, any>();
    this.subject = new Subject()
    this.change$ = this.subject.asObservable();
    this.markers = new BehaviorSubject<IMarker[]>([]);
    this.markersStream$ = this.markers.asObservable();
    this.addGroup();
  }

  open(node: ITreeNode) {
    let tabs: IEditorTab[] | undefined = this.map.get(this.activeGroup);
    (!tabs?.find(tab => tab.id == node.id)) && tabs?.push(Object.assign({
      id: node.id,
      text: node.text,
      type: node.editorType,
      group: this.activeGroup
    }, getEditorConfig(this, node)));
    this.setFocus(node.id, tabs!);
    this.map.set(this.activeGroup, tabs!);
    this.subject.next(this.activeGroup);
  }

  activate(id: string) {

  }

  remove(id: string) {
    let tabs: IEditorTab[] | undefined = this.map.get(this.activeGroup);
    let index: number = tabs?.findIndex(tab => tab.id == id)!;
    if (index > -1) tabs?.splice(index, 1);
    this.map.set(this.activeGroup, tabs!);
    this.editorsMap.delete(id);
    this.subject.next(this.activeGroup);
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

  setFocus(id: string, tabs?: IEditorTab[]) {
    let currentGroupTbas: IEditorTab[] = tabs ? tabs : this.map.get(this.activeGroup)!;
    currentGroupTbas.forEach(tab => {
      tab.focused = tab.id == id;
    });
    this.subject.next(this.activeGroup);
  }

  getMarkers(): IMarker[] {
    return this.markers.getValue();
  }

  onEditorInit(editorId: string, editor: any) {
    this.editorsMap.set(editorId, editor);
    if (!this.monacoInitialized) {
      monaco.editor.onDidChangeMarkers(this.onDidChangeMarkers.bind(this));
      this.monacoInitialized = true;
    }
  }

  onDidChangeMarkers([uri]: any) {
    let markers: IMarker[] = monaco.editor.getModelMarkers();
    this.markerProcess(markers);
    console.log(markers);
    this.markers.next(markers);
  }

  revealLine(marker: IMarker) {
    let id: string = marker.resource.authority;
    this.editorsMap.get(id).revealLine(marker.startLineNumber);
    let selection: monaco.Range = new monaco.Range(marker.startLineNumber, marker.startColumn, marker.endLineNumber, marker.endColumn);
    this.editorsMap.get(id).setSelection(selection);

  }

  private markerProcess(markers: IMarker[]) {
    markers && Array.isArray(markers) && markers.forEach((marker: IMarker) => {
      marker['id'] = `${marker.startLineNumber}-${marker.startColumn}-${marker.endLineNumber}-${marker.endColumn}`;
      marker.severityText = this.getSeverityText(marker.severity);
      if (marker.message.charAt(marker.message.length - 1) != '.') marker.message = `${marker.message}.`;
    });
  }

  private getSeverityText(severity: number): string {
    switch (severity) {
      case 1: return 'Hint';
      case 2: return 'Info';
      case 4: return 'Warning';
      case 8: return 'Error';
      default: return ''
    }
  }
}

export function getEditorConfig(scope: any, node: ITreeNode): any {
  if (node.editorType == EditorType.monaco) return getMonacoEditorConfig(scope, node);
  return {
    component: 'DomainGatewayComponent',
    attachedConfig: {}
  }
}

export function getMonacoEditorConfig(scope: any, node: ITreeNode): any {
  let theme: string = scope.themeService.theme;
  let uri: string = `a://${node.id}/${node.path?.join('/')}`!;
  console.log(node.path, uri);
  return {
    component: 'MonacoEditorComponent',
    attachedConfig: {
      options: {
        theme: theme,
        language: 'csharp',
        readOnly: false
      },
      code: CODE[node.id],
      uri: uri
    }
  }
}
