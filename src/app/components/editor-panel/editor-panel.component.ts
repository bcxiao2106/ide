import { AfterViewInit, Component, ComponentRef, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { siderFilesTreeViewId } from 'src/app/config/sider-files.config';
import { IEditorTab } from 'src/app/interfaces/interfaces';
import { IMarker } from 'src/app/interfaces/monaco-marker.interface';
import { ComponentService } from 'src/app/services/component.service';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.scss']
})
export class EditorPanelComponent implements OnInit, OnDestroy, OnChanges {
  // @Input('config') config!: IEditorTab[]; editorMarkers
  @ViewChild('editorPane', { read: ViewContainerRef, static: true }) editorPaneRef!: ViewContainerRef;
  @ViewChildren('tabs') tabsEleRefs!: QueryList<ElementRef>
  editorTabs!: IEditorTab[];
  groupId: number = 0;
  treeViewId: string = siderFilesTreeViewId;
  private subscription: Subscription = new Subscription();

  constructor(private ems: EditorsManagerService,
    private componentService: ComponentService,
    private treeService: TreeViewService) { }

  ngOnInit(): void {
    this.editorTabs = this.ems.get(this.groupId)!;
    this.subscribe();
    this.load();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.tabsEleRefs['_results']);
  }

  subscribe() {
    this.subscription.add(this.ems.change$.subscribe(activeGroup => {
      this.editorTabs = this.ems.get(this.groupId)!;
      this.load();
    }));
    this.subscription.add(this.ems.markersStream$.subscribe(markers => {
      console.log(markers);
    }));
  }

  onTabClick(tab: IEditorTab) {
    this.treeService.select(this.treeViewId, tab.id);
    this.ems.setFocus(tab.id);
  }

  load() {
    this.editorPaneRef && this.editorPaneRef.clear();
    if(!this.editorTabs || this.editorTabs.length == 0) return;
    let componentRef: ComponentRef<any> = this.editorPaneRef.createComponent(this.componentService.get('MonacoEditorComponent'));
    let focusedTab = this.editorTabs.find(tab => tab.focused == true);
    componentRef.instance['config'] = focusedTab?.attachedConfig;
    componentRef.instance['onInit'].subscribe((editor: any) => this.ems.onEditorInit(focusedTab?.id!, editor));
  }

  loadMarkers(markers: IMarker[]) {

  }

  close(tab: IEditorTab) {
    this.ems.remove(tab.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
