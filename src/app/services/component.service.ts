import { Injectable } from "@angular/core";
import { EditorPanelComponent } from "../components/editor-panel/editor-panel.component";
import { FunctionalPanelComponent } from "../components/functional-panel/functional-panel.component";
import { ListViewComponent } from "../components/list-view/list-view.component";
import { ProjectInfoComponent } from "../components/project-info/project-info.component";
import { TreeMenuComponent } from "../components/tree-menu/tree-menu.component";

@Injectable()
export class ComponentService {
    private map: any = {
        ProjectInfoComponent: ProjectInfoComponent,
        ListViewComponent: ListViewComponent,
        TreeMenuComponent: TreeMenuComponent,
        EditorPanelComponent: EditorPanelComponent,
        FunctionalPanelComponent: FunctionalPanelComponent

    }

    get(key: string): any {
        return this.map[key];
    }
}