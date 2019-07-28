import { Component, OnInit } from '@angular/core';
import { DbPicturesService } from '../shared/db-pictures.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public name: string;
  public temp:number;
  constructor(private dbService:DbPicturesService){
  }

  ngOnInit() {
   this.name= this.dbService.getName();
  }
  setTemp(t:number){
  this.temp=t;
  }

}
