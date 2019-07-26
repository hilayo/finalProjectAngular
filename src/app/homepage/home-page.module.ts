import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbPicturesService } from '../shared/db-pictures.service';
import { HomePageRoutingModule } from './home-page-routing.module';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';
import { HomepageComponent } from './homepage.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { CatagoriesComponent } from '../catagories/catagories.component';
import { ClothComponent } from '../cloth/cloth.component';
import { ClosetComponent } from '../closet/closet.component';
import { WeatherComponent } from '../weather/weather.component';
import { ChooseClothViewComponent } from '../choose-cloth-view/choose-cloth-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule
} from '@angular/material';
import { SelectClothComponent } from '../select-cloth/select-cloth.component';

@NgModule({
  declarations: [HomepageComponent,
    FavoritesComponent,
    CatagoriesComponent,
    ClothComponent,
    ClosetComponent,
    WeatherComponent,
    ChooseClothViewComponent,
    SelectClothComponent,
    CategoryDialogComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCheckboxModule,
    FormsModule,
     MatFormFieldModule,
     MatSelectModule,
     MatDialogModule,
    MatButtonModule,
    MatIconModule,
      MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  entryComponents: [ CategoryDialogComponent],
  bootstrap: [],
  providers: [DbPicturesService]
})
export class HomePageModule { }
