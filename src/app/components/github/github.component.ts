import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import axios from 'axios';
import { getHostingContext } from 'src/app/config/hosting-context.config';
import { GithubService } from 'src/app/services/github-service';
import { GithubAuthService } from 'src/app/services/github.auth.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {
  @ViewChild('reposContainer', { read: ViewContainerRef, static: true }) reposContainer!: ViewContainerRef;
  @ViewChild('reposTemplate', { static: true }) reposTemplate!: TemplateRef<any>;
  repositories: any[] | undefined;
  context = getHostingContext();
  constructor(private githubAuth: GithubAuthService,
    private githubService: GithubService) { }

  login() {
    // this.githubAuth.login();
    window.open(`https://github.com/login/oauth/authorize?client_id=${atob(this.context.cid)}&redirect_uri=${this.context.callbackUrl}`, '_self');
  }

  async getRepositories() {
    await this.githubService.loadRepositories();
    this.repositories = this.githubService.getRepositories();
    this.reposContainer && this.reposContainer.clear();
    this.reposContainer.createEmbeddedView(this.reposTemplate);
  }

  async onRepoSelect(event: any) {
    let selectedRepo = this.repositories?.find(repo => repo.id == event.target.value);
    await this.githubService.loadRepo(selectedRepo.name);
    console.log(event.target.value, selectedRepo);
  }
}
