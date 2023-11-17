import { Component, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';
import { GithubService } from 'src/app/services/github-service';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit, OnDestroy {
  @Input('config') config: ITreeNode | undefined;
  @ViewChild('element',  { static: true }) elRef?: ElementRef;
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  @ViewChild('template', { static: true }) templateRef!: TemplateRef<any>;
  indent: string = '8px';
  level!: number;
  isFolder: boolean = false;
  selected: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private treeService: TreeViewService,
    private ems: EditorsManagerService,
    private githubService: GithubService) { }

  ngOnInit(): void {
    if (this.config?.level) this.level = this.config?.level;
    this.isFolder = (this.config?.children && Array.isArray(this.config.children) && this.config.children.length > 0) ? true : false;
    this.indent = `${this.level * 10}px`;
    this.config?.children && this.config?.children.forEach(nodeId => {
        let node: any = this.treeService.get(this.config?.viewId!, nodeId);
        node.parent = this.config?.id;
        node.level = (this.config?.level ? this.config?.level : 0) + 1;
        node.path = this.config?.path?.concat(node.text);
    });
    this.subscribe();
    this.load();
  }
  subscribe() {
    this.subscription.add(this.treeService.getSelected$(this.config?.viewId!).subscribe(node => this.selected = node?.id == this.config?.id));
    this.subscription.add(this.githubService.resourceChange$.subscribe(resChange => {
      if(this.config?.id == resChange.rid) this.config.isDirty = resChange.isDirty;
    }));
  }

  get(nodeId: string): ITreeNode | undefined {
    return this.treeService.get(this.config?.viewId!, nodeId);
  }

  async click() {
    this.selected = true;
    this.setFocus();
    this.toggleSubMenu();
    if(!this.config?.children) await this.ems.open(this.config!);
    this.treeService.select(this.config?.viewId!, this.config?.id);
  }

  setFocus() {
    this.elRef?.nativeElement.focus();
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
