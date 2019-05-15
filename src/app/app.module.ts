import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module-login/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ClothComponent } from './cloth/cloth.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { ClosetComponent } from './closet/closet.component';
import {LoginModule} from '../app/module-login/module-login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    StartPageComponent,
    NavBarComponent,
    FavoritesComponent,
    CatagoriesComponent,
    ClothComponent,
    UploadPictureComponent,
    ClosetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
