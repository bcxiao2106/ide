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
import { MonacoEditorLoaderService } from './components/monaco-editor/monaco-editor-loader.service';
import { MonacoEditorLoaderDirective } from './components/monaco-editor/monaco-editor-loader.directive';
import { CsharpCompletionService } from './services/csharp-completion.service';
import { ThemesService } from './services/themes.service';
import { EditorMarkersComponent } from './components/editor-markers/editor-markers.component';
import { ViewService } from './services/view.service';
import { CloudSiderComponent } from './components/cloud/cloud-sider/cloud-sider.component';
import { SvgIconDirective } from './directives/svg-icon.directive';
import { DomainGatewayComponent } from './components/cloud/domain-gateway/domain-gateway.component';
import { PopupComponent } from './components/shared/popup/popup.component';
import { ActionManagerService } from './services/action-manager.service';
import { MigratePluginComponent } from './components/cloud/migrate-plugin/migrate-plugin.component';
import { GithubAuthService } from './services/github.auth.service';
import { GithubService } from './services/github-service';
import { GithubComponent } from './components/github/github.component';
import { DateTimeProvider, OAuthLogger, OAuthService, SystemDateTimeProvider, UrlHelperService } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { GitHubAuthLogger } from './classes/github.auth.class';
import { OauthRedirectComponent } from './components/oauth-redirect/oauth-redirect.component';

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
    MonacoEditorComponent,
    MonacoEditorLoaderDirective,
    EditorMarkersComponent,
    CloudSiderComponent,
    SvgIconDirective,
    DomainGatewayComponent,
    PopupComponent,
    MigratePluginComponent,
    GithubComponent,
    OauthRedirectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ComponentService,
    TreeViewService,
    EditorsManagerService,
    ViewCacheService,
    MonacoEditorLoaderService,
    CsharpCompletionService,
    ThemesService,
    ViewService,
    ActionManagerService,
    GithubAuthService,
    GithubService,
    OAuthService,
    UrlHelperService,
    {provide: OAuthLogger, useClass: GitHubAuthLogger },
    {provide: DateTimeProvider, useClass: SystemDateTimeProvider}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
