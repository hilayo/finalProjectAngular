import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module-login/login/login.component';
import { signUpComponent } from './module-login/signUp/signUp.component';
const routes: Routes = [

 { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'homePage',
    loadChildren: './homepage/home-page.module#HomePageModule'},
    { path: 'login', component: LoginComponent },
  { path: 'signUp', component: signUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
