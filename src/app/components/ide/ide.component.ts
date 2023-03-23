import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Themes } from 'src/app/config/themes.config';
import { ILoadComponent, IViewContainer } from 'src/app/interfaces/interfaces';
import { ActionManagerService } from 'src/app/services/action-manager.service';

@Component({
  selector: 'ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.scss']
})
export class IdeComponent implements OnInit {
  @ViewChild('topNav', { read: ViewContainerRef, static: true }) topNavContainer!: ViewContainerRef;
  @ViewChild('workspaceNav', { read: ViewContainerRef, static: true }) workspaceNavContainer!: ViewContainerRef;
  @ViewChild('sider', { read: ViewContainerRef, static: true }) siderContainer!: ViewContainerRef;
  @ViewChild('editor', { read: ViewContainerRef, static: true }) editor!: ViewContainerRef;
  @ViewChild('functionPanel', { read: ViewContainerRef, static: true }) functionPanelContainer!: ViewContainerRef;
  @ViewChild('popup', { read: ViewContainerRef, static: true }) popupContainer!: ViewContainerRef;

  constructor(private actionManager: ActionManagerService) { }

  ngOnInit(): void {
    let containers: IViewContainer[] = [
      { id: 'topNav', ref: this.topNavContainer },
      { id: 'workspaceNav', ref: this.workspaceNavContainer },
      { id: 'sider', ref: this.siderContainer },
      { id: 'editor', ref: this.editor },
      { id: 'functionPanel', ref: this.functionPanelContainer },
      { id: 'popup', ref: this.popupContainer }
    ];
    let views: ILoadComponent[] = [
      { target: 'topNav', component: 'TopNavComponent' },
      { target: 'workspaceNav', component: 'WorkspaceNavComponent' },
      { target: 'sider', component: 'SiderComponent' },
      { target: 'editor', component: 'EditorPanelComponent' },
      { target: 'functionPanel', component: 'FunctionalPanelComponent' }
    ];
    this.actionManager.execute([
      { service: 'theme', method: 'init', params: { config: Themes } },
      { service: 'view', method: 'registerContainers', params: { containers: containers } },
      { service: 'view', method: 'load', params: { components: views } }
    ]);
  }
}
