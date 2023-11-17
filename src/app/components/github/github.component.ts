import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import axios from 'axios';
import { getHostingContext } from 'src/app/config/hosting-context.config';
import { GitSiderSections } from 'src/app/config/sider-sections.config';
import { IRepo } from 'src/app/interfaces/github.interfaces';
import { ISection } from 'src/app/interfaces/interfaces';
import { GithubService } from 'src/app/services/github-service';
import { GithubAuthService } from 'src/app/services/github.auth.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  hostingContext = getHostingContext();
  sections: ISection[] = GitSiderSections;
  title: string = '';

  constructor(private githubAuth: GithubAuthService,
    private githubService: GithubService) { }

  ngOnInit(): void {
    let repo: IRepo = this.githubService.getRepo()!;
    console.log(repo);
    this.title = `SOURCE CONTROL: \n${repo.name}/${repo.currentBranch}`;
  }

  login() {
    // this.githubAuth.login();
    window.open(`https://github.com/login/oauth/authorize?client_id=${this.hostingContext.cid}&redirect_uri=${this.hostingContext.callbackUrl}`, '_self');
  }
}
