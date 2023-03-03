import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ISection } from 'src/app/interfaces/interfaces';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input('config') config!: ISection;
  @ViewChild('container', {read: ViewContainerRef, static: true}) containerRef!: ViewContainerRef;

  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    console.log(this.config);
    this.load();
  }

  click() {
    this.config.isExpanded = !this.config.isExpanded;
    this.load();
    console.log(this.config);
  }

  load() {
    this.containerRef && this.containerRef.clear();
    if(this.config.isExpanded) {
      this.containerRef.createComponent(this.componentService.get(this.config.component));
    }
  }
}
