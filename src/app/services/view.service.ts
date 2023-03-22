import { Injectable, ViewContainerRef } from "@angular/core";

@Injectable()
export class ViewService {
  private map: Map<string, ViewContainerRef>;

  constructor() {
    this.map = new Map<string, ViewContainerRef>();
  }

  register(id: string, viewRef: ViewContainerRef) {
    this.map.set(id, viewRef);
  }

  registerInBulk(views: any[]) {
    views && views.forEach(v => {
      this.register(v.id, v.view);
    });
  }

  get(id: string): ViewContainerRef {
    return this.map.get(id)!;
  }
}
