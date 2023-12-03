import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBranch } from 'src/app/interfaces/github.interfaces';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';
import { GithubService } from 'src/app/services/github-service';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'fs-tree',
  templateUrl: './fs-tree.component.html',
  styleUrls: ['./fs-tree.component.scss']
})
export class FsTreeComponent implements OnInit, OnDestroy {
  config: ITreeNode | undefined;
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  @ViewChild('template', {static: true}) templateRef!: TemplateRef<any>;
  private subscription: Subscription = new Subscription();
  private treeNodes: ITreeNode[] = [];

  constructor(private treeService: TreeViewService,
    private ems: EditorsManagerService,
    private githubService: GithubService) { }

  ngOnInit(): void {
    let current = this.githubService.getCurrent();
    if(current) {
      this.init(current);
    }
    this.subscribe();
  }

  private subscribe() {
    this.subscription.add(this.githubService.repoChange$.subscribe(this.init.bind(this)));
  }

  private init(repo: IBranch) {
    repo.tree[0].level = 0;
    this.config = repo.tree[0];
    this.treeNodes = repo.tree;
    this.initTree();
    this.load();
  }

  private initTree() {
    this.treeService.register(this.config?.viewId!);
    this.treeService.setRange(this.treeNodes);
    this.config?.children && this.config?.children.forEach(nodeId => {
      let node: any = this.treeService.get(this.config?.viewId!, nodeId);
      if(node) {
        node.parent = this.config?.id;
        node.level = 1;
        node.path = this.config?.path?.concat(node.text);
      }
    });
    this.subscription.add(this.treeService.getSelected$(this.config?.viewId!).subscribe(async (node) => {
      await this.ems.open(node);
    }));
  }

   private load() {
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
