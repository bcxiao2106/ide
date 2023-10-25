import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { GithubService } from 'src/app/services/github-service';
import { GithubAuthService } from 'src/app/services/github.auth.service';

@Component({
  selector: 'app-repo-selector',
  templateUrl: './repo-selector.component.html',
  styleUrls: ['./repo-selector.component.scss']
})
export class RepoSelectorComponent implements OnInit {
  @ViewChild('reposContainer', { read: ViewContainerRef, static: true }) reposContainer!: ViewContainerRef;
  @ViewChild('reposTemplate', { static: true }) reposTemplate!: TemplateRef<any>;
  repositories: any[] | undefined;
  constructor(private githubAuth: GithubAuthService,
    private githubService: GithubService) { }

  async ngOnInit(): Promise<void> {
    await this.getRepositories();
  }
  login() {
    // this.githubAuth.login();
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

