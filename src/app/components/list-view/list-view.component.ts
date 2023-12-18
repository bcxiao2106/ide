import { Component } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  items = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`);
}
