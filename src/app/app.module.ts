import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {LoginModule} from '../app/module-login/module-login.module';
import { MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    NavBarComponent

     ],

  imports: [
     BrowserModule,
    AppRoutingModule,
     LoginModule,
     BrowserAnimationsModule,
     MatToolbarModule

  ], providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
