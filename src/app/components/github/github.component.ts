import { Component } from '@angular/core';
import axios from 'axios';
import { GithubAuthService } from 'src/app/services/github.auth.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {
  constructor(private githubAuth: GithubAuthService) {}

  login() {
    // this.githubAuth.login();
    window.open('https://github.com/login/oauth/authorize?client_id=Iv1.f7f5f7931416304c&redirect_uri=http://localhost:3000', '_self');
    // window.open('https://github.com/login/oauth/authorize?client_id=Iv1.949259aaa2168657&redirect_uri=http://localhost:3000/');


  }

}
