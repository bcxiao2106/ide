import { Component } from '@angular/core';
import { WorkspaceNav } from 'src/app/config/workspace-nav.config';
import { IAction } from 'src/app/interfaces/interfaces';
import { ActionService } from 'src/app/services/action.service';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'workspace-nav',
  templateUrl: './workspace-nav.component.html',
  styleUrls: ['./workspace-nav.component.scss']
})
export class WorkspaceNavComponent {
  config: any = WorkspaceNav;
  constructor(private themeService: ThemesService,
    private actionService: ActionService) {}

  switchTheme() {
    let theme: string = this.themeService.theme == 'vs-dark' ? 'vs-light' : 'vs-dark';
    this.themeService.switch(theme);
  }

  execute(actions: IAction[]) {
    this.actionService.execute(actions);
  }
}
