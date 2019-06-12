import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module-login/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { signUpComponent } from './module-login/signUp/signUp.component';
import { ClosetComponent } from './closet/closet.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: 'signUp', component: signUpComponent },
  { path: 'closet', component: ClosetComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
