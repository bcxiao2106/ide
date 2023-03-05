import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeComponent } from './components/ide/ide.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SiderComponent } from './components/sider/sider.component';
import { WorkspaceNavComponent } from './components/workspace-nav/workspace-nav.component';
import { SectionComponent } from './components/section/section.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { ComponentService } from './services/component.service';
import { TreeMenuComponent } from './components/tree-menu/tree-menu.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { TreeViewService } from './services/tree-view.service';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { EditorPanelComponent } from './components/editor-panel/editor-panel.component';
import { FunctionalPanelComponent } from './components/functional-panel/functional-panel.component';
import { EditorsManagerService } from './services/editors-manager.service';
import { ViewCacheService } from './services/view-cache.service';
import { MonacoEditorComponent } from './components/monaco-editor/monaco-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeComponent,
    TopNavComponent,
    SiderComponent,
    WorkspaceNavComponent,
    SectionComponent,
    ProjectInfoComponent,
    TreeMenuComponent,
    ListViewComponent,
    TreeNodeComponent,
    EditorPanelComponent,
    FunctionalPanelComponent,
    MonacoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ComponentService,
    TreeViewService,
    EditorsManagerService,
    ViewCacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
