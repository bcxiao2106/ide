import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Themes } from 'src/app/config/themes.config';
import { ActionService } from 'src/app/services/action.service';
import { ThemesService } from 'src/app/services/themes.service';
import { ViewService } from 'src/app/services/view.service';
import { SiderComponent, TopNavComponent, WorkspaceNavComponent } from '../components';
import { EditorPanelComponent } from '../editor-panel/editor-panel.component';
import { FunctionalPanelComponent } from '../functional-panel/functional-panel.component';

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

  constructor(private themes: ThemesService,
    private viewService: ViewService,
    private actionService: ActionService) { }

  ngOnInit(): void {
    this.themes.init(Themes);
    this.viewService.registerInBulk([
      { id: 'topNav', view: this.topNavContainer },
      { id: 'workspaceNav', view: this.workspaceNavContainer },
      { id: 'sider', view: this.siderContainer },
      { id: 'editor', view: this.editor },
      { id: 'functionPanel', view: this.functionPanelContainer },
      { id: 'popup', view: this.popupContainer }
    ]);
    this.actionService.execute([
      { target: 'topNav', component: 'TopNavComponent' },
      { target: 'workspaceNav', component: 'WorkspaceNavComponent' },
      { target: 'sider', component: 'SiderComponent' },
      { target: 'editor', component: 'EditorPanelComponent' },
      { target: 'functionPanel', component: 'FunctionalPanelComponent' }
    ]);
  }
}
