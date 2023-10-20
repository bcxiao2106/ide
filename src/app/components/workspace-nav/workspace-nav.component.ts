import { Component } from '@angular/core';
import { WorkspaceNav } from 'src/app/config/workspace-nav.config';
import { IAction, IContext } from 'src/app/interfaces/interfaces';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'workspace-nav',
  templateUrl: './workspace-nav.component.html',
  styleUrls: ['./workspace-nav.component.scss']
})
export class WorkspaceNavComponent {
  config: any = WorkspaceNav;
  context!: IContext;
  constructor(private themeService: ThemesService) { }

  switchTheme() {
    let theme: string = this.themeService.currentTheme == 'vs-dark' ? 'vs-light' : 'vs-dark';
    this.themeService.switch(theme);
  }

  onClick(item: any) {
    this.toggleSelect(item, this.config.start);
    this.toggleSelect(item, this.config.end);
    this.execute(item.actions);
  }

  private execute(actions: IAction[]) {
    this.context && this.context.actionManager.execute(actions);
  }

  private toggleSelect(selected: any, items: any[]) {
    items.forEach(item => {
      item.selected = item.id == selected.id;
    });
  }
}
