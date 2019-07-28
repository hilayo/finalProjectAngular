import { Component, OnInit } from '@angular/core';
import { SLoginService } from '../module-login/slogin.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public name: string;
  public temp: number;
  constructor(private sLogin: SLoginService) {
  }

  ngOnInit() {
    this.name = this.sLogin.getName();
  }
  setTemp(t: number) {
    this.temp = t;
  }

}
