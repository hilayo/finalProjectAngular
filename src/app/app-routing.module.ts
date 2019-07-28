import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './module-login/login/login.component';
import { signUpComponent } from './module-login/signUp/signUp.component';
//import { SLoginService } from './module-login/slogin.service';

// @Injectable()
//  class OnlyLoggedInUsersGuard implements CanActivate {
//   constructor(private slogin:SLoginService) {}
//   canActivate() : boolean{
//   return !!this.slogin.getUserId();
//   }
// }


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'homePage',
    loadChildren: './homepage/home-page.module#HomePageModule',
  //  canActivate: [OnlyLoggedInUsersGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: signUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}



