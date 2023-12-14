import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ITreeNode } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent implements OnInit, OnDestroy {
  @Input('node') config: ITreeNode | undefined;
  indents: number[] = [];
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.indents = Array.from({length: this.config?.level!}, (_, index) => index);
    }, 500);
    
    console.log('TreeItemComponent'.toUpperCase(), this.config?.level, this.indents);
  }
  ngOnDestroy(): void {
    
  }
}
