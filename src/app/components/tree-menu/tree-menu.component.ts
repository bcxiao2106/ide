import { Component, Input, OnInit } from '@angular/core';
import { ITreeNode } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {
  @Input('config') config!: ITreeNode;

  constructor() {}

  ngOnInit(): void {
    console.log(this.config);
  }
}
