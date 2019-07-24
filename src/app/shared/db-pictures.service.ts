import { Injectable } from "@angular/core";
import { Cloth } from "../cloth/Cloth";
import {
  COLOR_CATEGORY,
  CLOTH_STYLE_CATEGORY,
  TYPE_ITEM_CATEGORY,
  SEASONS_CATEGORY
} from "../catagories/catagories.component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const UID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
@Injectable({
  providedIn: "root"
})
export class DbPicturesService {
  url:string="http://localhost:3000/clothes";
  private clothArray: Cloth[] = new Array();
  private choosenClothesArray: Cloth[] = new Array();
  constructor(private http: HttpClient) {}

  addPicture(imageBase64: any) {
    const cloth: Cloth = {
      id: UID(),
      image: imageBase64,
      color: null,
      typeOfItem: null
    };
    this.saveCloth(cloth);
   // console.log("add picture", cloth);
   // this.clothArray.push(cloth);
  }

  saveCloth(cloth:Cloth){
  this.http.post(this.url,cloth).subscribe(data=>console.log("yay!!"));
  }

  getCloths(): Observable<Cloth[]>{

    return this.http.get<Cloth[]>(this.url);
   // debugger;
    //return this.clothArray;
  }
  deletePicture(id:string){
    console.log(id)
;    this.http.delete( `${this.url}/${id}`).subscribe(data=>console.log("delete success"));
  //   this.imageArray.filter
  //   this.imageArray.push(imageBase64);
  //  azure???
  }

  addToChoosenClothes(cloth:Cloth){
   this.choosenClothesArray.push(cloth);
  }
  getChoosenClothes() {
   return this.choosenClothesArray;
  }
}
