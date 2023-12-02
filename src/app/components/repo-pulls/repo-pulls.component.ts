import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPullRequest, PullRequest } from 'src/app/interfaces/github.interfaces';
import { GithubService } from 'src/app/services/github-service';

@Component({
  selector: 'app-repo-pulls',
  templateUrl: './repo-pulls.component.html',
  styleUrls: ['./repo-pulls.component.scss']
})
export class RepoPullsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  pulls: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.pulls = this.githubService.getRepo()?.pulls!;
  }

  subscribe() {
    this.subscription.add(this.githubService.prChange$.subscribe(pulls => {
      this.pulls = pulls;
    }));
  }

  async closePullRequest(pr: any) {
    await this.githubService.closePullRequest(pr.number);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
