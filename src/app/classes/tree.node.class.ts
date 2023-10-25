import { EditorType } from "../interfaces/enums";
import { ITreeNode } from "../interfaces/interfaces";

export class TreeNode implements ITreeNode {
  id: string;
  viewId: string;
  text: string;
  editorType: EditorType | undefined;
  resource?: any;
  children?: string[] | undefined;


  constructor(id: string, viewId: string, text: string, type: string, resource?: any) {
    this.id = id;
    this.viewId = viewId;
    this.text = text;
    if(resource) this.resource = resource;
    if(type === 'dir') {
      this.children = [];
      this.editorType = EditorType.none;
    } else if(type === 'file') {
      this.editorType = EditorType.monaco;
    }
  }
}
