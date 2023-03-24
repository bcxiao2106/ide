import { NgIfContext } from '@angular/common';
import { Component } from '@angular/core';
import { IContext } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-migrate-plugin',
  templateUrl: './migrate-plugin.component.html',
  styleUrls: ['./migrate-plugin.component.scss']
})
export class MigratePluginComponent {
  context!: IContext;

  migrate() {

  }

  cancel() {

  }

}
