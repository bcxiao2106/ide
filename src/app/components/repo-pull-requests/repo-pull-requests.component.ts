import { Component, OnInit } from '@angular/core';
import { IBranchBasic } from 'src/app/interfaces/github.interfaces';
import { GithubService } from 'src/app/services/github-service';

@Component({
  selector: 'app-repo-pull-requests',
  templateUrl: './repo-pull-requests.component.html',
  styleUrls: ['./repo-pull-requests.component.scss']
})
export class RepoPullRequestsComponent implements OnInit {
  baseBranches: IBranchBasic[] = [];
  compareBranches: IBranchBasic[] = [];
  branches: IBranchBasic[] = [];
  base: string = '';
  compare: string = '';
  title: string = '';
  description: string = '';

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    let repo = this.githubService.getRepo();
    this.branches = repo?.branches!;
    this.baseBranches = this.branches;
    this.compareBranches = this.branches;
    this.compare = this.compareBranches.find(b => b.current)?.name!;
    this.base = this.baseBranches.find(b => b.isDefault)?.name!;
    this.title = `PR: ${this.base} <- ${this.compare}`;
  }

  createPullRequest() {
    if (this.base !== this.compare)
      this.githubService.createPullRequest(this.compare, this.base, this.title, this.description);
  }

  onBaseSelect(event: any) {
    this.base = event.target.value;
  }

  onCompareSelect(event: any) {
    this.compare = event.target.value;
  }

  onTitleChange(event: any) {
    this.title = event.target.value;
  }

  onDescChange(event: any) {
    this.description = event.target.value;
  }
}
