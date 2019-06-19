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
import { ClosetComponent } from './closet/closet.component';
import {LoginModule} from '../app/module-login/module-login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UploadPictureModule } from './upload-picture/upload-picture.module';
import { DbPicturesService } from './shared/db-pictures.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StartPageComponent,
    NavBarComponent,
    FavoritesComponent,
    CatagoriesComponent,
    ClothComponent,
    ClosetComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    UploadPictureModule

  ],
  providers: [DbPicturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
