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
import { DbPicturesService } from './shared/db-pictures.service';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { ChooseClothViewComponent } from './choose-cloth-view/choose-cloth-view.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
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
    WeatherComponent,
    ChooseClothViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
     FlexLayoutModule,
     MatButtonModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
    //server
    //material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule

  ],


  exports:[
  MatButtonModule,
  MatCheckboxModule],
  providers: [DbPicturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

