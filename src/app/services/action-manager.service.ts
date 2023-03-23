import { Injectable } from "@angular/core";
import { IAction, IContext } from "../interfaces/interfaces";
import { ComponentService } from "./component.service";
import { EditorsManagerService } from "./editors-manager.service";
import { ThemesService } from "./themes.service";
import { TreeViewService } from "./tree-view.service";
import { ViewCacheService } from "./view-cache.service";
import { ViewService } from "./view.service";

@Injectable()
export class ActionManagerService {
  private context: IContext;

  constructor(
    private themeService: ThemesService,
    private treeService: TreeViewService,
    private viewService: ViewService,
    private componentService: ComponentService,
    private editorManagerService: EditorsManagerService,
    private cacheService: ViewCacheService) {
    this.context = {
      theme: this.themeService,
      tree: this.treeService,
      view: this.viewService,
      component: this.componentService,
      editors: this.editorManagerService,
      cache: this.cacheService,
      actionManager: this
    }
  }

  execute(actions: IAction[]) {
    actions && Array.isArray(actions) && actions.forEach(action => {
      let params: any = undefined;
      if(action.params) params = Object.assign(action.params, { context: this.context });
      this.context[action.service][action.method](params);
    });
  }
}
