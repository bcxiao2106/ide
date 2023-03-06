import { Component, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEditorTab } from 'src/app/interfaces/interfaces';
import { ComponentService } from 'src/app/services/component.service';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.scss']
})
export class EditorPanelComponent implements OnInit, OnDestroy {
  // @Input('config') config!: IEditorTab[];
  @ViewChild('editorPane', { read: ViewContainerRef, static: true }) editorPaneRef!: ViewContainerRef;
  editorTabs!: IEditorTab[];
  groupId: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private ems: EditorsManagerService,
    private componentService: ComponentService) { }

  ngOnInit(): void {
    this.editorTabs = this.ems.get(this.groupId)!;
    this.subscribe();
    this.load();
  }

  subscribe() {
    this.subscription.add(this.ems.change$.subscribe(activeGroup => {
      this.editorTabs = this.ems.get(this.groupId)!;
      this.load();
    }));
  }

  onTabClick(tab: IEditorTab) {
    this.ems.setFocus(tab.id);
  }

  load() {
    this.editorPaneRef && this.editorPaneRef.clear();
    let componentRef: ComponentRef<any> = this.editorPaneRef.createComponent(this.componentService.get('MonacoEditorComponent'));
    let focusedTab = this.editorTabs.find(tab => tab.focused == true);
    console.log(this.editorTabs, focusedTab);
    componentRef.instance['config'] = focusedTab?.attachedConfig;
  }

  close(tab: IEditorTab) {
    this.ems.remove(tab.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
