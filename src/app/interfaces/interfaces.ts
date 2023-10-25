import { ViewContainerRef } from "@angular/core";
import { ActionManagerService } from "../services/action-manager.service";
import { ComponentService } from "../services/component.service";
import { EditorsManagerService } from "../services/editors-manager.service";
import { ThemesService } from "../services/themes.service";
import { TreeViewService } from "../services/tree-view.service";
import { ViewCacheService } from "../services/view-cache.service";
import { ViewService } from "../services/view.service";
import { EditorType, IdeServices } from "./enums";

export interface ISection {
  title: string;
  component: string;
  config?: any;
  isExpanded?: boolean;
}
export interface ITreeNode {
  id: string;
  viewId: string;
  level?: number;
  text: string;
  uri?: string;
  path?: string[];
  children?: string[];
  order?: number;
  icon?: string;
  isExpanded?: boolean;
  parent?: string;
  editorType?: EditorType;
  resource?: any;
}
export interface ITab {
  id: string;
  text: string;
  changed?: boolean;
  focused?: boolean;
  component?: string;
  attachedConfig?: any;
}
export interface IEditorTab extends ITab {
  type: EditorType;
  group: number;
  isPreview?: boolean;
}
export interface IThemesConfig {
  themes: string[];
  default: string;
  map: Record<string, Record<string, string>>;
}
export interface IAction {
  service: string;
  method: string;
  params?: any;
}
export interface IViewAction extends IAction {

}
export interface IContext {
  theme: ThemesService;
  tree: TreeViewService;
  view: ViewService;
  component: ComponentService;
  editors: EditorsManagerService;
  cache: ViewCacheService;
  actionManager: ActionManagerService;
  [key: string]: any;
}
export interface IViewContainer {
  id: string;
  ref: ViewContainerRef;
}
export interface ILoadComponent {
  target: string;
  component: string;
  attachedConfig?: any;
}
export interface IActionParams {
  context: IContext;
}
export interface IThemeParams extends IActionParams {
  config: IThemesConfig;
}
export interface IContainerParams extends IActionParams {
  containers: IViewContainer[];
}
export interface ILoadComponentParams extends IActionParams {
  components: ILoadComponent[];
}
