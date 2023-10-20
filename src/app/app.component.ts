import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GithubAuthService } from './services/github.auth.service';
import { Octokit } from '@octokit/core';
const token = 'bearer ghu_gNhPHKD01AluCugFjIsZMNH2BzGNlF0O7Vav';
//access_token=ghu_gNhPHKD01AluCugFjIsZMNH2BzGNlF0O7Vav&expires_in=28800&refresh_token=ghr_eeNHGep1bSbkn5nCRIjrcPqRWgfRrrx04KL49bO83nyBtO6Dl4V3zjEWQMgPxLlYtbhTf33LooL5&refresh_token_expires_in=15811200&scope=&token_type=bearer

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ide';
  constructor(private router: Router,
    private route: ActivatedRoute,
    private githubAuth: GithubAuthService) {

  }

  ngOnInit(): void {
      console.log(this.router);
      this.route.queryParams.subscribe(async (params: Object) => {
        if(params.hasOwnProperty('code')) {
          this.githubAuth.init(Reflect.get(params, 'code'));
          // await this.githubAuth.getToken();
          const octokit = new Octokit({ auth: token });
          const aaa = await octokit.request("GET /repos/{owner}/{repo}/contents/{filePath}", {
            owner: "bcxiao2106",
            repo: "ide",
            branch: 'master',
            filePath: ''
          });
          console.log(aaa);

          // console.log(Reflect.get(params, 'code'));
          // this.router.navigate([], {
          //   queryParams: { 'code': null },
          //   queryParamsHandling: 'merge'
          // });
        }
      });
  }
}
