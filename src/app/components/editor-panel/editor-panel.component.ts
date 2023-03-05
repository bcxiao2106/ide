import { Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEditorTab } from 'src/app/interfaces/interfaces';
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

  constructor(private ems: EditorsManagerService) { }

  ngOnInit(): void {
    this.editorTabs = this.ems.get(this.groupId)!;
    this.subscribe();
  }

  subscribe() {
    this.subscription.add(this.ems.change$.subscribe(activeGroup => {
      this.editorTabs = this.ems.get(this.groupId)!;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
