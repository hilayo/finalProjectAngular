
import { Component, OnInit } from '@angular/core';
import { SLoginService } from '../module-login/slogin.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userLoggedIn:boolean;
  constructor(private slogin: SLoginService) { }

  ngOnInit() {
    this.slogin.$isUserLoggedIn.subscribe(val => this.userLoggedIn = val);
  }
  logOut()
  {
    this.userLoggedIn=false;
  }

}
