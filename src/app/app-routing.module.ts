import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module-login/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { signUpComponent } from './module-login/signUp/signUp.component';
import { ClosetComponent } from './closet/closet.component';
import { CatagoriesComponent } from './catagories/catagories.component';

const routes: Routes = [

  { path: '', redirectTo: 'homePage', pathMatch: 'full' },
  { path: 'uploadPicture',
    loadChildren: './upload-picture/upload-picture.module#UploadPictureModule' },
  { path: 'login', component: LoginComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: 'signUp', component: signUpComponent },
  { path: 'closet', component: ClosetComponent },
  { path: 'categories', component: CatagoriesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
