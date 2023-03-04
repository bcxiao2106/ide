import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit, OnDestroy {
  @Input('config') config: ITreeNode | undefined;
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  @ViewChild('template', { static: true }) templateRef!: TemplateRef<any>;
  indent: string = '8px';
  level: number = 0;
  isFolder: boolean = false;
  selected: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private treeService: TreeViewService) { }

  ngOnInit(): void {
    console.log(this.config);
    if (this.config?.level) this.level = this.config?.level;
    this.isFolder = (this.config?.children && Array.isArray(this.config.children) && this.config.children.length > 0) ? true : false;
    this.indent = `${this.level * 8}px`;
    this.config?.children && this.config?.children.forEach(nodeId => {
      if (this.treeService.get(nodeId)) {
        let node: any = this.treeService.get(nodeId);
        node.parent = this.config?.id;
        node.level = (this.config?.level ? this.config?.level : 0) + 1;
      }
    });
    this.subscribe();
    this.load();
  }
  subscribe() {
    this.subscription.add(this.treeService.selected$.subscribe(selected => this.selected = selected == this.config?.id));
  }

  get(nodeId: string): ITreeNode | undefined {
    return this.treeService.get(nodeId);
  }

  click() {
    this.selected = true;
    this.treeService.select(this.config?.id);
    this.toggleSubMenu();
  }

  toggleSubMenu() {
    if (!this.config?.children) return;
    this.config.isExpanded = !this.config.isExpanded;
    this.load();
  }

  load() {
    this.containerRef && this.containerRef.clear();
    if (this.config?.isExpanded) {
      this.containerRef.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}