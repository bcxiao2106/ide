import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { getHostingContext } from 'src/app/config/hosting-context.config';
import { IBranch, IRepo } from 'src/app/interfaces/github.interfaces';
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
  selectedRepo: string = '';
  branchName: string = '';
  hostingContext: any = getHostingContext();
  current: IBranch | undefined;
  repo: IRepo | undefined;
  constructor(private githubAuth: GithubAuthService,
    private githubService: GithubService) { }

  async ngOnInit(): Promise<void> {
    this.repositories = this.githubService.getRepositories();
    if(this.repositories.length == 0) {
      await this.githubService.loadRepositories();
      await this.firstInit();
    } else {
      this.loadRepoList();
      this.repo = this.githubService.getRepo();
      this.current = this.githubService.getCurrent();
      this.selectedRepo = this.repo?.name!;
      this.branches = this.repo?.branches;
      this.selectedBranch = this.branches?.find(b => b.name == this.repo?.currentBranch);
      this.loadBranchList();
    }

    console.log('RepoSelectorComponent'.toUpperCase(), this.repositories, this.repo, this.current);
  }

  login() {
    // this.githubAuth.login();
    window.open(`https://github.com/login/oauth/authorize?client_id=${this.hostingContext.cid}&redirect_uri=${this.hostingContext.callbackUrl}`, '_self');
  }

  async firstInit() {
    await this.githubService.loadRepositories();
    this.repositories = this.githubService.getRepositories();
    if(this.repositories && this.repositories.length > 0) {
      this.loadRepoList();
      await this.selectRepo(this.repositories[0].id);
    }
  }

  async onRepoSelect(event: any) {
    await this.selectRepo(event.target?.value);
  }

  async selectRepo(repoId: string) {
    let selectedRepo = this.repositories?.find(repo => repo.id == repoId);
    this.selectedRepo = selectedRepo.name;
    await this.githubService.loadRepo(selectedRepo.name);
    let repo: IRepo = this.githubService.getRepo(selectedRepo.name)!;
    this.branches = repo.branches;
    this.selectedBranch = this.branches.find(b => b.name == selectedRepo.default_branch);
    console.log(repoId, selectedRepo, repo);
    this.loadBranchList();
  }

  loadRepoList() {
    this.reposContainer && this.reposContainer.clear();
    this.reposContainer.createEmbeddedView(this.reposTemplate);
  }

  loadBranchList() {
    this.branchContainer && this.branchContainer.clear();
    this.branchContainer.createEmbeddedView(this.branchTemplate);
  }

  async onBranchSelect(event: any) {
    this.branchName = event.target.value;
    this.githubService.switchToBranch(this.selectedRepo, this.branchName);
  }
}

