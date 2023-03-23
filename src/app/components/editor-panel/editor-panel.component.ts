import { Component, ComponentRef, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { siderFilesTreeViewId } from 'src/app/config/sider-files.config';
import { EditorType } from 'src/app/interfaces/enums';
import { IContext, IEditorTab } from 'src/app/interfaces/interfaces';
import { IMarker } from 'src/app/interfaces/monaco-marker.interface';

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

  constructor() { }

  ngOnInit(): void {
    this.editorTabs = this.context.editors.get(this.groupId)!;
    this.subscribe();
    this.load();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.tabsEleRefs['_results']);
  }

  subscribe() {
    this.subscription.add(this.context.editors.change$.subscribe(activeGroup => {
      this.editorTabs = this.context.editors.get(this.groupId)!;
      this.load();
    }));
    this.subscription.add(this.context.editors.markersStream$.subscribe(markers => {
      console.log(markers);
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
    let componentRef: ComponentRef<any> = this.editorPaneRef.createComponent(this.context.component.get(focusedTab?.component!));
    componentRef.instance['config'] = focusedTab?.attachedConfig;
    componentRef.instance['context'] = this.context;
    if(focusedTab?.type == EditorType.monaco) componentRef.instance['onInit'].subscribe((editor: any) => this.context.editors.onEditorInit(focusedTab?.id!, editor));
  }

  loadMarkers(markers: IMarker[]) {

  }

  close(tab: IEditorTab) {
    this.context.editors.remove(tab.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
