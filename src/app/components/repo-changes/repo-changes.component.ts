import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IResourceChange } from 'src/app/interfaces/github.interfaces';
import { GithubService } from 'src/app/services/github-service';

@Component({
  selector: 'app-repo-changes',
  templateUrl: './repo-changes.component.html',
  styleUrls: ['./repo-changes.component.scss']
})
export class RepoChangesComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  changes: any[] = [];
  message: string = '';
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.subscription.add(this.githubService.resourceChange$.subscribe(change => {
      console.log(this.githubService.getCurrent());
      this.getChanges(this.githubService.getCurrent().changes);
    }));
    console.log(this.githubService.getCurrent().branch);
    this.getChanges(this.githubService.getCurrent().changes);
  }

  async commit() {
    if(!this.changes || this.changes.length == 0) return;
    await this.githubService.commit(this.changes, this.message);
  }

  getChanges(changes: Record<string, string>) {
    this.changes = [];
    for(let id in changes) {
      console.log(id);
      let resource = this.githubService.getResource(id);
      let pathSegments: string[] = resource.path.split('/');
      let path: string = '';
      if(pathSegments.length > 1) {
        path = pathSegments.splice(0, pathSegments.length - 1).join('/');
      }
      this.changes.push({
        id: id,
        name: resource.name,
        path: resource.path,
        parent: path,
        content: changes[id]
      });
    }
  }

  onMessageChange(event: any) {
    console.log(event.target.value);
    this.message = event.target.value;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
