import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBranch } from 'src/app/interfaces/github.interfaces';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';
import { GithubService } from 'src/app/services/github-service';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'fs-virual-tree',
  templateUrl: './virual-tree.component.html',
  styleUrls: ['./virual-tree.component.scss']
})
export class VirualTreeComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  nodes: ITreeNode[] = [];
  treeViewId: string = 'fs_tree_nexxe.ng';

  constructor(private githubService: GithubService,
    private treeService: TreeViewService,
    private cdRef: ChangeDetectorRef,
    private ems: EditorsManagerService) {}

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
    this.treeViewId = repo.tree[0].viewId;
    this.nodes = this.treeService.getTree(this.treeViewId);
    console.log('VirualTreeComponent'.toUpperCase(), this.nodes);
  }

  trackByFunction(index: number, node: ITreeNode): string {
    return node.id;
  }

  getElementId(node: ITreeNode, index: number): string {
    return `${node.type}_${index}_lvl_${node.level}`;
  }

  async onClick(node: ITreeNode) {
    if(node.type !== 'dir') {
      await this.ems.open(node);
    } else {
      this.toggleExpanded(node);
    }
  }

  toggleExpanded(node: ITreeNode) {
    if(node.type !== 'dir') return;
    this.nodes = this.treeService.toggleExpanded(node);
    this.cdRef.detectChanges();
    console.log(this.nodes);
  }

  getIndents(node: ITreeNode): number[] {
    return Array.from({length: node.level!}, (_, index) => index)
  }

  ngOnDestroy(): void {
    
  }
}
