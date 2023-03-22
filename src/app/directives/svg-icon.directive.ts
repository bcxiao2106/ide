import { AfterViewInit, Directive, ElementRef, Input, Renderer2, } from '@angular/core';

@Directive({
  selector: '[svgicon]'
})
export class SvgIconDirective implements AfterViewInit {
  @Input('svgicon') svgicon!: string;

  constructor(private elRef: ElementRef,
    private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    let anchorElement: any = this.elRef.nativeElement;
    let svgElement: SVGSVGElement = this.renderer.createElement('svg', 'http://www.w3.org/2000/svg');
    let useElement: SVGUseElement = this.renderer.createElement('use', 'http://www.w3.org/2000/svg');
    useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `/assets/svgs.svg#${this.svgicon}`);
    svgElement.appendChild(useElement);
    anchorElement.appendChild(svgElement);
  }
}
