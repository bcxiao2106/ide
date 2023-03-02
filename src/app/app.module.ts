import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSplitModule } from 'angular-split';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeComponent } from './components/ide/ide.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
