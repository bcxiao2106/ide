import { AfterViewInit, Component, ComponentRef, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEditorTab } from 'src/app/interfaces/interfaces';
import { ComponentService } from 'src/app/services/component.service';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.scss']
})
export class EditorPanelComponent implements OnInit, OnDestroy, OnChanges {
  // @Input('config') config!: IEditorTab[];
  @ViewChild('editorPane', { read: ViewContainerRef, static: true }) editorPaneRef!: ViewContainerRef;
  @ViewChildren('tabs') tabsEleRefs!: QueryList<ElementRef>
  editorTabs!: IEditorTab[];
  groupId: number = 0;
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
  }

  onTabClick(tab: IEditorTab) {
    this.treeService.select(tab.id);
    this.ems.setFocus(tab.id);
  }

  load() {
    this.editorPaneRef && this.editorPaneRef.clear();
    let componentRef: ComponentRef<any> = this.editorPaneRef.createComponent(this.componentService.get('MonacoEditorComponent'));
    let focusedTab = this.editorTabs.find(tab => tab.focused == true);
    componentRef.instance['config'] = focusedTab?.attachedConfig;
  }

  close(tab: IEditorTab) {
    this.ems.remove(tab.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
