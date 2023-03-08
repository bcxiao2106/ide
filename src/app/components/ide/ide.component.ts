import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Themes } from 'src/app/config/themes.config';
import { ThemesService } from 'src/app/services/themes.service';
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

  constructor(private themes: ThemesService) { }

  ngOnInit(): void {
    this.themes.init(Themes);
    this.topNavContainer.createComponent(TopNavComponent);
    this.workspaceNavContainer.createComponent(WorkspaceNavComponent);
    this.siderContainer.createComponent(SiderComponent);
    this.editor.createComponent(EditorPanelComponent);
    this.functionPanelContainer.createComponent(FunctionalPanelComponent);
  }
}
