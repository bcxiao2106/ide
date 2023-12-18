import { EditorType } from "../interfaces/enums";
import { ITreeNode } from "../interfaces/interfaces";

export class TreeNode implements ITreeNode {
  id: string;
  viewId: string;
  text: string;
  editorType: EditorType | undefined;
  resource?: any;
  children?: string[] | undefined;
  path?: string[] | undefined;
  parent?: string | undefined;
  level: number;
  type: string;


  constructor(id: string, viewId: string, text: string, type: string, path?: string[], parent?: string, resource?: any) {
    this.id = id;
    this.viewId = viewId;
    this.text = text;
    this.path = path ? path : [];
    if(path?.length == 1 && path[0] == '.') this.level = 0;
    else this.level = this.path.length;
    this.parent = parent;
    this.type = type;
    if(resource) {
      this.resource = resource;
    }
    if(type === 'dir') {
      this.children = [];
      this.editorType = EditorType.none;
    } else if(type === 'file') {
      this.editorType = EditorType.monaco;
    }
  }
}
