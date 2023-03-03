import { Component } from '@angular/core';
import { SiderSections } from 'src/app/config/sider-sections.config';
import { ISection } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent {
  sections: ISection[] = SiderSections;
}
