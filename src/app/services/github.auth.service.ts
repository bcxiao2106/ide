import { Injectable } from "@angular/core";
import { OAuthLogger, OAuthService } from "angular-oauth2-oidc";
import { authConfig } from "../config/github.auth.config";
import axios from "axios";

@Injectable()
export class GithubAuthService {
    private clientId: string = atob('SXYxLmY3ZjVmNzkzMTQxNjMwNGM=');
    private clientSecret: string = atob('ZDVlNTY0OTIzNzUwMTYzNTJmYjUyMmU4YWQ2MWRkZDE3MDU2NmQ4Zg==');
    private code: string | undefined;

    constructor(private oauthService: OAuthService) {
        // this.configureOAuth();
    }

    init(code: string) {
      this.code = code;
    }

    private configureOAuth() {
        this.oauthService.configure(authConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }

    async getToken() {
      const tokenResponse = await axios({
        method: 'post',
        url: 'https://github.com/login/oauth/access_token?' +
          `client_id=${this.clientId}&` +
          `client_secret=${this.clientSecret}&` +
          `code=${this.code}`,
        headers: {
          accept: 'application/json'
        }
      });
      console.log('TOKEN#####', tokenResponse);
    }

    login() {
        this.oauthService.initCodeFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

    get claims() {
        return this.oauthService.getIdentityClaims();
    }
}
