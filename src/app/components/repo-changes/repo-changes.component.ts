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
    await this.githubService.commit([]);
  }

  getChanges(changes: Record<string, string>) {
    this.changes = [];
    for(let id in changes) {
      console.log(id);
      let resource = this.githubService.getResource(id);
      this.changes.push({
        id: id,
        name: resource.name,
        path: resource.path,
        content: changes[id]
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
