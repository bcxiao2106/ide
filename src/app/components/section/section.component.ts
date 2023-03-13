import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ISection } from 'src/app/interfaces/interfaces';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input('config') section!: ISection;
  @ViewChild('container', {read: ViewContainerRef, static: true}) containerRef!: ViewContainerRef;

  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    console.log(this.section);
    this.load();
  }

  click() {
    this.section.isExpanded = !this.section.isExpanded;
    this.load();
    console.log(this.section);
  }

  load() {
    this.containerRef && this.containerRef.clear();
    if(this.section.isExpanded) {
      let componentRef: ComponentRef<any> = this.containerRef.createComponent(this.componentService.get(this.section.component));
      if(this.section.config) {
        componentRef.instance['config'] = this.section.config;
        console.log(componentRef);
      }
    }
  }
}
