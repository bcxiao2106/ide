import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IContext, IViewContainer } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  config: any;
  context!: IContext;
  container!: IViewContainer;
  containerId: string = 'popupContent';
  constructor() { }

  ngOnInit(): void {
    this.container = { id: this.containerId, ref: this.containerRef };
    this.context.actionManager.execute([
      { service: 'view', method: 'registerContainers', params: { containers: [this.container] } }
    ]);
    this.load();
  }

  load() {
    this.context.actionManager.execute([
      { service: 'view', method: 'load', params: { components: [{ target: this.containerId, component: this.config.component }] } }
    ]);
  }

  close() {
    this.context?.actionManager.execute([
      { service: 'view', method: 'clear', params: { id: 'popup' } }
    ]);
  }

  onElseClick(event: MouseEvent) {
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    this.context.actionManager.execute([
      { service: 'view', method: 'deregisterContainers', params: { containers: [this.container] } }
    ]);
  }
}
