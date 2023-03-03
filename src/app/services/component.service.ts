import { Injectable } from "@angular/core";
import { ListViewComponent } from "../components/list-view/list-view.component";
import { ProjectInfoComponent } from "../components/project-info/project-info.component";
import { TreeMenuComponent } from "../components/tree-menu/tree-menu.component";

@Injectable()
export class ComponentService {
    private map: any = {
        ProjectInfoComponent: ProjectInfoComponent,
        ListViewComponent: ListViewComponent,
        TreeMenuComponent: TreeMenuComponent

    }

    get(key: string): any {
        return this.map[key];
    }
}