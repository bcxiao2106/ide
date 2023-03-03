import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {
  @Input('config') config!: ITreeNode | undefined;
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  @ViewChild('template', {static: true}) templateRef!: TemplateRef<any>;

  constructor(private treeService: TreeViewService) { }

  ngOnInit(): void {
    console.log(this.config);
  }

  get(nodeId: string): ITreeNode | undefined {
    return this.treeService.get(nodeId);
  }

  toggleSubMenu() {
    if (!this.config?.children) return;
    this.config.isExpanded = !this.config.isExpanded;
    this.containerRef && this.containerRef.clear();
    if(this.config.isExpanded) {
      this.containerRef.createEmbeddedView(this.templateRef);
    }
  }
}
