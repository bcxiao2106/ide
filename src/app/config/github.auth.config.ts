import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://github.com/login/oauth/authorize',
  redirectUri: window.location.origin + '/oauth/redirect',
  clientId: 'Iv1.949259aaa2168657',
  responseType: 'code',
  scope: 'read:user',
};