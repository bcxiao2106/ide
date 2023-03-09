import { Component } from '@angular/core';
import { FunctionalSections } from 'src/app/config/functional-tabs.config';
import { ISection } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-functional-panel',
  templateUrl: './functional-panel.component.html',
  styleUrls: ['./functional-panel.component.scss']
})
export class FunctionalPanelComponent {

  sections: ISection[] = FunctionalSections;
}
