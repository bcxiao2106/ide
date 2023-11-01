import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import axios from 'axios';
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
  constructor(private githubAuth: GithubAuthService,
    private githubService: GithubService) { }

  login() {
    // this.githubAuth.login();
    // window.open('https://github.com/login/oauth/authorize?client_id=Iv1.82426621cb1861d3&redirect_uri=https://bcxiao2106.github.io/ide', '_self');
    window.open('https://github.com/login/oauth/authorize?client_id=Iv1.f7f5f7931416304c&redirect_uri=http://localhost:3000', '_self');
    // window.open('https://github.com/login/oauth/authorize?client_id=Iv1.949259aaa2168657&redirect_uri=http://localhost:3000/');
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
