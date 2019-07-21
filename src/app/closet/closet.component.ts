import { Component, OnInit } from "@angular/core";
import { DbPicturesService } from "../shared/db-pictures.service";
import { Cloth } from "../cloth/Cloth";
import { Observable } from 'rxjs';
@Component({
  selector: "app-closet",
  templateUrl: "./closet.component.html",
  styleUrls: ["./closet.component.scss"]
})
export class ClosetComponent implements OnInit {
  imageArray: string[];
  clothArray:  Observable<any>;
  constructor(private pictureService: DbPicturesService) {}
  loading:boolean=false;

  ngOnInit() {
    this.clothArray=this.pictureService.getCloths();
console.log(this.clothArray)
     //= this.pictureService.getImages().subscribe(data=>);
    //this.imageArray = this.clothArray.map(x => <string>x.image);
  }

}
