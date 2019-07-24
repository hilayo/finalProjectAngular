import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module-login/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FavoritesComponent } from './favorites/favorites.component';
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
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CatagoriesComponent } from './catagories/catagories.component';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

// import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';

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
    CategoryDialogComponent
  ],

  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
    // MatGridListModule

  ],
  exports:[
    FlexLayoutModule,
    // MatGridListModule
     FlexLayoutModule,
     MatButtonModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
    MatSidenavModule,
    //server,
    //material
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule
  ],


  entryComponents:[CategoryDialogComponent],
  providers: [DbPicturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

