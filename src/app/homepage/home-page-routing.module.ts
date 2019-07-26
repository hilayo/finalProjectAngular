import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosetComponent } from '../closet/closet.component';
import { CatagoriesComponent } from '../catagories/catagories.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'uploadPicture',
    loadChildren: '../upload-picture/upload-picture.module#UploadPictureModule'
  },
   { path: 'closet', component: ClosetComponent },
 { path: 'categories', component: CatagoriesComponent },
 { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
