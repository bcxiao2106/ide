import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITreeNode } from 'src/app/interfaces/interfaces';
import { IMarker } from 'src/app/interfaces/monaco-marker.interface';
import { EditorsManagerService } from 'src/app/services/editors-manager.service';
import { TreeViewService } from 'src/app/services/tree-view.service';

@Component({
  selector: 'ditor-markers',
  templateUrl: './editor-markers.component.html',
  styleUrls: ['./editor-markers.component.scss']
})
export class EditorMarkersComponent implements OnInit, OnDestroy {
  @ViewChild('markers', { read: ViewContainerRef, static: true }) markersContainerRef!: ViewContainerRef;
  @ViewChild('template', { static: true }) templateRef!: TemplateRef<any>;
  private subscription: Subscription = new Subscription();
  markers!: IMarker[];
  selectedMarker!: string;
  count: string = '';
  private editorMarkersTreeViewId: string = 'editorMarkersTree';
  rootNode: ITreeNode = { id: 'root', text: 'root', viewId: this.editorMarkersTreeViewId, children: [] };

  constructor(private ems: EditorsManagerService,
    private treeService: TreeViewService) { }

  ngOnInit(): void {
    this.markers = this.ems.getMarkers();
    this.subscribe();
    this.load();
  }

  subscribe() {
    this.subscription.add(this.ems.markersStream$.subscribe(markers => {
      this.markers = markers;
      this.load();
    }));
  }

  generateTree() {
    // this.treeService.deregister(this.editorMarkersTreeViewId);
    this.treeService.register(this.editorMarkersTreeViewId);
    this.rootNode.children = [];
    this.markers.forEach(marker => {
      if (!this.treeService.has(this.editorMarkersTreeViewId, marker.resource.authority)) {
        let parentNode: ITreeNode = { id: marker.resource.authority, text: marker.resource.path, viewId: this.editorMarkersTreeViewId, children: [] };
        this.treeService.set(parentNode);
        this.rootNode.children?.push(marker.resource.authority);
      }
      let id: string = `${marker.resource.authority}-${marker.id}`;
      let node: ITreeNode = { id: id, text: marker.message, viewId: this.editorMarkersTreeViewId };
      this.treeService.appendChild(this.editorMarkersTreeViewId, marker.resource.authority, node);
    });
    this.treeService.set(this.rootNode);
    console.log(this.treeService);
  }

  revealLine(marker: IMarker) {
    this.markers.forEach(mk => {
      mk['selected'] = (marker['id'] == mk['id']);
    });
    this.selectedMarker = marker['id']!;
    this.ems.revealLine(marker);
  }

  load() {
    this.markersContainerRef && this.markersContainerRef.clear();
    if (!this.markers || this.markers.length == 0) this.count = '';
    else {
      this.generateTree();
      this.count = `(${this.markers.length})`;
      this.markersContainerRef.createEmbeddedView(this.templateRef, { rootNode: this.rootNode });
    }
  }

  get(id: string): ITreeNode {
    return this.treeService.get(this.editorMarkersTreeViewId, id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
