import { Component } from '@angular/core';
import { ISection } from 'src/app/interfaces/interfaces';
import { FunctionalSections } from 'src/app/config/functional-sections.config';

@Component({
  selector: 'app-functional-panel',
  templateUrl: './functional-panel.component.html',
  styleUrls: ['./functional-panel.component.scss']
})
export class FunctionalPanelComponent {

  sections: ISection[] = FunctionalSections;
}
