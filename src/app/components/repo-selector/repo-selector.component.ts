import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { getHostingContext } from 'src/app/config/hosting-context.config';
import { IRepo } from 'src/app/interfaces/github.interfaces';
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
  @ViewChild('branchContainer', { read: ViewContainerRef, static: true }) branchContainer!: ViewContainerRef;
  @ViewChild('branchTemplate', { static: true }) branchTemplate!: TemplateRef<any>;
  repositories: any[] | undefined;
  branches: any[] | undefined;
  selectedBranch: any;
  repoName: string = '';
  branchName: string = '';
  hostingContext: any = getHostingContext();
  constructor(private githubAuth: GithubAuthService,
    private githubService: GithubService) { }

  async ngOnInit(): Promise<void> {
    await this.getRepositories();
  }
  
  login() {
    // this.githubAuth.login();
    window.open(`https://github.com/login/oauth/authorize?client_id=${this.hostingContext.cid}&redirect_uri=${this.hostingContext.callbackUrl}`, '_self');
  }

  async getRepositories() {
    await this.githubService.loadRepositories();
    this.repositories = this.githubService.getRepositories();
    this.reposContainer && this.reposContainer.clear();
    this.reposContainer.createEmbeddedView(this.reposTemplate);
    this.repositories && this.repositories.length > 0 && await this.selectRepo(this.repositories[0].id);
  }

  async onRepoSelect(event: any) {
    await this.selectRepo(event.target?.value);
  }

  async selectRepo(repoId: string) {
    let selectedRepo = this.repositories?.find(repo => repo.id == repoId);
    this.repoName = selectedRepo.name;
    await this.githubService.loadRepo(selectedRepo.name);
    let repo: IRepo = this.githubService.getRepo(selectedRepo.name)!;
    this.branches = repo.branches;
    this.selectedBranch = this.branches.find(b => b.name == selectedRepo.default_branch);
    console.log(repoId, selectedRepo, repo);
    this.loadBranchList();
  }

  loadBranchList() {
    this.branchContainer && this.branchContainer.clear();
    this.branchContainer.createEmbeddedView(this.branchTemplate);
  }

  async onBranchSelect(event: any) {
    this.branchName = event.target.value;
    this.githubService.switchToBranch(this.repoName, this.branchName);
  }
}

