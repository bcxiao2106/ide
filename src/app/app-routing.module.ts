import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthRedirectComponent } from './components/oauth-redirect/oauth-redirect.component';

const routes: Routes = [
  {
    path: 'oauth', pathMatch: 'full', children: [
      { path: 'redirect/:code', component: OauthRedirectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
