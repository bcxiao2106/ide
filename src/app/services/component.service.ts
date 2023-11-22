import { Injectable } from "@angular/core";
import { CloudSiderComponent } from "../components/cloud/cloud-sider/cloud-sider.component";
import { DomainGatewayComponent } from "../components/cloud/domain-gateway/domain-gateway.component";
import { MigratePluginComponent } from "../components/cloud/migrate-plugin/migrate-plugin.component";
import { SiderComponent, TopNavComponent, WorkspaceNavComponent } from "../components/components";
import { EditorPanelComponent } from "../components/editor-panel/editor-panel.component";
import { FunctionalPanelComponent } from "../components/functional-panel/functional-panel.component";
import { ListViewComponent } from "../components/list-view/list-view.component";
import { MonacoEditorComponent } from "../components/monaco-editor/monaco-editor.component";
import { ProjectInfoComponent } from "../components/project-info/project-info.component";
import { PopupComponent } from "../components/shared/popup/popup.component";
import { GithubComponent } from "../components/github/github.component";
import { RepoSelectorComponent } from "../components/repo-selector/repo-selector.component";
import { RepoChangesComponent } from "../components/repo-changes/repo-changes.component";
import { RepoPullRequestsComponent } from "../components/repo-pull-requests/repo-pull-requests.component";
import { FsTreeComponent } from "../components/fs-tree/fs-tree.component";

@Injectable()
export class ComponentService {
    private map: any = {
        ProjectInfoComponent: ProjectInfoComponent,
        ListViewComponent: ListViewComponent,
        FsTreeComponent: FsTreeComponent,
        EditorPanelComponent: EditorPanelComponent,
        FunctionalPanelComponent: FunctionalPanelComponent,
        MonacoEditorComponent: MonacoEditorComponent,
        TopNavComponent: TopNavComponent,
        WorkspaceNavComponent: WorkspaceNavComponent,
        SiderComponent: SiderComponent,
        CloudSiderComponent: CloudSiderComponent,
        DomainGatewayComponent: DomainGatewayComponent,
        PopupComponent: PopupComponent,
        MigratePluginComponent: MigratePluginComponent,
        GithubComponent: GithubComponent,
        RepoSelectorComponent: RepoSelectorComponent,
        RepoChangesComponent: RepoChangesComponent,
        RepoPullRequestsComponent: RepoPullRequestsComponent
    }

    get(key: string): any {
        return this.map[key];
    }
}
