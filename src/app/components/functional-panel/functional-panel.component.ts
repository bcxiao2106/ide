import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FunctionalSections, FunctionalTabs } from 'src/app/config/functional-tabs.config';
import { ISection, ITab } from 'src/app/interfaces/interfaces';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-functional-panel',
  templateUrl: './functional-panel.component.html',
  styleUrls: ['./functional-panel.component.scss']
})
export class FunctionalPanelComponent implements OnInit {
  @ViewChild('functionPane', { read: ViewContainerRef, static: true }) functionPaneRef!: ViewContainerRef;
  sections: ISection[] = FunctionalSections;
  tabs: ITab[] = FunctionalTabs;

  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    let focusedTab: ITab = this.tabs.find(tab => tab.focused == true)!;
    this.load(focusedTab);
  }

  onClick(tab: ITab) {
    this.tabs.forEach(t => {
      t.focused = t.id == tab.id;
    });
    this.load(tab);
    console.log(tab);
  }

  load(tab: ITab) {
    this.functionPaneRef && this.functionPaneRef.clear();
    this.functionPaneRef.createComponent(this.componentService.get(tab.component!));
  }
}