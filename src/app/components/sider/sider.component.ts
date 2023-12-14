import { Component, OnInit } from '@angular/core';
import { SiderSections } from 'src/app/config/sider-sections.config';
import { ISection } from 'src/app/interfaces/interfaces';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {
  constructor(private treeService: TreeViewService) { }

  sections: ISection[] = SiderSections;

  ngOnInit(): void {
    // this.treeService.register(siderFilesTreeViewId);
    // this.treeService.setRange(SiderMenu);
  }
}
