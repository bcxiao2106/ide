import { Injectable } from "@angular/core";
import { OAuthLogger, OAuthService } from "angular-oauth2-oidc";
import { authConfig } from "../config/github.auth.config";

@Injectable()
export class GithubAuthService {
    constructor(private oauthService: OAuthService) {
        this.configureOAuth();
    }

    private configureOAuth() {
        this.oauthService.configure(authConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
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