import { Component, OnInit } from '@angular/core';
import { DbPicturesService } from '../shared/db-pictures.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public name: string;
  // constructor(private route: ActivatedRoute) {
  //  this.name = this.route.snapshot.params['name'] as string;
  constructor(private dbService:DbPicturesService){


    // this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
   this.name= this.dbService.getName();
  }

}
