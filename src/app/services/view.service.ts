import { ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { IContainerParams, ILoadComponentParams, IViewContainer } from "../interfaces/interfaces";

@Injectable()
export class ViewService {
  private map: Map<string, ViewContainerRef>;

  constructor() {
    this.map = new Map<string, ViewContainerRef>();
  }

  private registerContainer(container: IViewContainer) {
    this.map.set(container.id, container.ref);
  }

  registerContainers(params: IContainerParams) {
    params.containers && params.containers.forEach(container => {
      this.registerContainer(container);
    });
  }

  deregisterContainers(params: IContainerParams) {
    params.containers && params.containers.forEach(container => {
      this.map.delete(container.id);
    });
  }

  load(params: ILoadComponentParams) {
    params && params.components && Array.isArray(params.components) && params.components.forEach(action => {
      let container = this.getContainerRef(action.target);
      let comp = params.context.component.get(action.component);
      if(container && comp) {
        container.clear();
        let compRef: ComponentRef<any> = container.createComponent(comp);
        compRef.instance['context'] = params.context;
        action.attachedConfig && Object.assign(compRef.instance, action.attachedConfig);
      }
    });
  }

  getContainerRef(id: string): ViewContainerRef {
    return this.map.get(id)!;
  }

  clear(params: any) {
    this.map.get(params.id)?.clear();
  }
}
