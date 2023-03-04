import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {
  @Input('config') config: ITreeNode | undefined;
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  @ViewChild('template', {static: true}) templateRef!: TemplateRef<any>;

  constructor(private treeService: TreeViewService) { }

  ngOnInit(): void {
    console.log(this.config);
    this.config?.children && this.config?.children.forEach(nodeId => {
      if(this.treeService.get(nodeId)) {
        let node: any = this.treeService.get(nodeId);
        node.parent = this.config?.id;
        node.level = 1;
      }
    });
  }

  get(nodeId: string): ITreeNode | undefined {
    return this.treeService.get(nodeId);
  }
}