import { Component } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'workspace-nav',
  templateUrl: './workspace-nav.component.html',
  styleUrls: ['./workspace-nav.component.scss']
})
export class WorkspaceNavComponent {
  constructor(private themeService: ThemesService) {}

  switchTheme() {
    let theme: string = this.themeService.theme == 'vs-dark' ? 'vs-light' : 'vs-dark';
    this.themeService.switch(theme);
  }
}
