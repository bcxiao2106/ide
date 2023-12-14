import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';
import { GithubService } from 'src/app/services/github-service';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'changes-tree',
  templateUrl: './changes-tree.component.html',
  styleUrls: ['./changes-tree.component.scss']
})
export class ChangesTreeComponent implements OnInit, OnDestroy {
  config: ITreeNode | undefined;
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  @ViewChild('template', { static: true }) templateRef!: TemplateRef<any>;
  private subscription: Subscription = new Subscription();
  private treeNodes: ITreeNode[] = [];

  constructor(private treeService: TreeViewService,
    private ems: EditorsManagerService,
    private githubService: GithubService) { }

  ngOnInit(): void {
    let current = this.githubService.getCurrent();
    this.config = current.changeTree[0];
    this.config.viewId = `changes_tree_${current.name}`;
    this.treeNodes = current.changeTree;
    console.log(current);
    this.init();
    this.load();
  }

  init() {
    this.treeService.register(this.config?.viewId!, []);
    this.treeService.setRange(this.treeNodes);
    this.config?.children && this.config?.children.forEach(nodeId => {
      let node: any = this.treeService.get(this.config?.viewId!, nodeId);
      if (node) {
        node.parent = this.config?.id;
        node.level = 1;
        node.path = this.config?.path?.concat(node.text);
      }
    });
    this.subscription.add(this.treeService.getSelected$(this.config?.viewId!).subscribe(async (node) => {
      await this.ems.open(node);
    }));
  }

  load() {
    this.containerRef && this.containerRef.clear();
    this.containerRef.createEmbeddedView(this.templateRef);
  }

  get(nodeId: string): ITreeNode | undefined {
    return this.treeService.get(this.config?.viewId!, nodeId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
