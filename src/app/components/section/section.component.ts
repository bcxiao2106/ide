import { Component, ComponentRef, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ISection } from 'src/app/interfaces/interfaces';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input('config') section!: ISection;
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  @ViewChild('sectionBody', { static: true }) sectionBodyElRef: ElementRef<any> | undefined;

  constructor(private componentService: ComponentService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log(this.section, this.sectionBodyElRef?.nativeElement);
    this.load();
  }

  click() {
    this.section.isExpanded = !this.section.isExpanded;
    this.load();
    console.log(this.section);
  }

  load() {
    this.applyStyles();
    this.containerRef && this.containerRef.clear();
    if (this.section.isExpanded) {
      let componentRef: ComponentRef<any> = this.containerRef.createComponent(this.componentService.get(this.section.component));
      if (this.section.config) {
        componentRef.instance['config'] = this.section.config;
        console.log(componentRef);
      }
    }
  }

  applyStyles() {
    if(this.section.style && Object.keys(this.section.style).length > 0) {
      for(let [key, value] of Object.entries(this.section.style)) {
        if(this.section.isExpanded) {
          this.renderer.setStyle(this.sectionBodyElRef?.nativeElement, key, value);
        } else {
          this.renderer.removeStyle(this.sectionBodyElRef?.nativeElement, key);
        }
      }
    }
  }
}
