import { Component } from '@angular/core';
import { EditorType } from 'src/app/interfaces/enums';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';

@Component({
  selector: 'app-cloud-sider',
  templateUrl: './cloud-sider.component.html',
  styleUrls: ['./cloud-sider.component.scss']
})
export class CloudSiderComponent {
  node: ITreeNode = { id: 'c-001', text: 'Domain Gateway Service', viewId: 'cloudSider', editorType: EditorType.custom };

  constructor(private editorsService: EditorsManagerService) { }

  open() {
    this.editorsService.open(this.node);
  }
}
