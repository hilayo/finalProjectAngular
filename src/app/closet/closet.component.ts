import { Component, OnInit } from '@angular/core';
import { DbPicturesService } from '../shared/db-pictures.service';


@Component({
  selector: 'app-closet',
  templateUrl: './closet.component.html',
  styleUrls: ['./closet.component.scss']
})

export class ClosetComponent implements OnInit {

  imageArray:string[];
  constructor(private pictureService : DbPicturesService  ) {

  }

  ngOnInit() {
    var arrayImg:string[] = this.pictureService.getImages();
    console.log("closet on init"+ arrayImg.length);
    this.imageArray= this.pictureService.getImages();
  }



}
