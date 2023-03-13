import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit, OnDestroy {
  @Input('config') config: ITreeNode | undefined;
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  @ViewChild('template', {static: true}) templateRef!: TemplateRef<any>;
  private subscription: Subscription = new Subscription();

  constructor(private treeService: TreeViewService,
    private ems: EditorsManagerService) { }

  ngOnInit(): void {
    this.config?.children && this.config?.children.forEach(nodeId => {
      let node: any = this.treeService.get(this.config?.viewId!, nodeId);
      if(node) {        
        node.parent = this.config?.id;
        node.level = 1;
        node.path = this.config?.path?.concat(node.text);
      }
    });
  }

  subscribe() {
    this.subscription.add(this.treeService.getSelected$(this.config?.viewId!).subscribe(node => {
      this.ems.open(node);
    }));
  }

  get(nodeId: string): ITreeNode | undefined {
    return this.treeService.get(this.config?.viewId!, nodeId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}