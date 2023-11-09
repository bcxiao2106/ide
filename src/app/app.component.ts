import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubAuthService } from './services/github.auth.service';
import { GithubService } from './services/github-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ide';
  constructor(private router: Router,
    private route: ActivatedRoute,
    private githubAuth: GithubAuthService,
    private githubService: GithubService) { }

  ngOnInit(): void {
    console.log(this.router);
    this.route.queryParams.subscribe(async (params: Object) => {
      if (params.hasOwnProperty('code')) {
        this.githubAuth.init(Reflect.get(params, 'code'));
        await this.githubAuth.getToken();
        // let token: string = `${fetchTokenResponse['token_type']} ${fetchTokenResponse['access_token']}`;
        // const octokit = new Octokit({ auth: token });
        // const aaa = await octokit.request("GET /users/{owner}/repos", {//GET /users/{username}/repos //GET /repos/{owner}/{repo}/contents/{filePath}
        //   owner: "bcxiao2106",
        //   // repo: "ide",
        //   // branch: 'master',
        //   // filePath: ''
        // });
        // let aaa = await this.githubService.getRepositories('bcxiao2106');
        // console.log(aaa);

        console.log(Reflect.get(params, 'code'));
        this.router.navigate([], {
          queryParams: { 'code': null },
          queryParamsHandling: 'merge'
        });
      }
    });
  }
}
