import { Injectable, ViewContainerRef } from "@angular/core";
import { ComponentService } from "./component.service";
import { ViewService } from "./view.service";
import { IAction } from "../interfaces/interfaces";

@Injectable()
export class ActionService {
  constructor(private componentService: ComponentService,
    private viewService: ViewService) { }

    execute(actions: IAction[]){
      actions && Array.isArray(actions) && actions.forEach(action => {
        let comp: any = this.componentService.get(action.component);
        let container: ViewContainerRef = this.viewService.get(action.target);
        if(comp && container) {
          container.clear();
          container.createComponent(comp);
        }
      });
    }
}
