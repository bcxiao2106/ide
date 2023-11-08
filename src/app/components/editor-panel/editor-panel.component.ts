import { Component, ComponentRef, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { siderFilesTreeViewId } from 'src/app/config/sider-files.config';
import { EditorType } from 'src/app/interfaces/enums';
import { IBranch, IRepo } from 'src/app/interfaces/github.interfaces';
import { IContext, IEditorTab } from 'src/app/interfaces/interfaces';
import { IMarker } from 'src/app/interfaces/monaco-marker.interface';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';
import { GithubService } from 'src/app/services/github-service';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.scss']
})
export class EditorPanelComponent implements OnInit, OnDestroy, OnChanges {
  // @Input('config') config!: IEditorTab[]; editorMarkers
  @ViewChild('editorPane', { read: ViewContainerRef, static: true }) editorPaneRef!: ViewContainerRef;
  @ViewChildren('tabs') tabsEleRefs!: QueryList<ElementRef>;
  context!: IContext;
  editorTabs!: IEditorTab[];
  groupId: number = 0;
  treeViewId: string = siderFilesTreeViewId;
  private subscription: Subscription = new Subscription();

  constructor(private githubService: GithubService,
    private ems: EditorsManagerService) { }

  ngOnInit(): void {
    this.editorTabs = this.context.editors.get(this.groupId)!;
    this.subscribe();
    // this.load();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.tabsEleRefs['_results']);
  }

  subscribe() {
    this.subscription.add(this.context.editors.change$.subscribe(async (activeGroup) => {
      this.editorTabs = this.context.editors.get(this.groupId)!;
      this.load();
    }));
    this.subscription.add(this.context.editors.markersStream$.subscribe(markers => {
      console.log(markers);
    }));
    this.subscription.add(this.githubService.repoChange$.subscribe((repo: IBranch) => {
      // this.closeAll();
    }));
  }

  onTabClick(tab: IEditorTab) {
    this.context.tree.select(this.treeViewId, tab.id);
    this.context.editors.setFocus(tab.id);
  }

  load() {
    this.editorPaneRef && this.editorPaneRef.clear();
    if(!this.editorTabs || this.editorTabs.length == 0) return;
    let focusedTab = this.editorTabs.find(tab => tab.focused == true);
    this.applyMonacoTheme(focusedTab);
    let componentRef: ComponentRef<any> = this.editorPaneRef.createComponent(this.context.component.get(focusedTab?.component!));
    componentRef.instance['config'] = focusedTab?.attachedConfig;
    componentRef.instance['context'] = this.context;
    if(focusedTab?.type == EditorType.monaco) componentRef.instance['onInit'].subscribe((editor: any) => this.context.editors.onEditorInit(focusedTab?.id!, editor));
  }

  loadMarkers(markers: IMarker[]) {

  }

  private applyMonacoTheme(editorConfig: any) {
    if(editorConfig.type != 'monaco') return;
    editorConfig.attachedConfig.options.theme = this.context.theme.currentTheme;
  }

  close(tab: IEditorTab) {
    this.context.editors.remove(tab.id);
  }

  private closeAll() {
    this.ems.closeAll();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
