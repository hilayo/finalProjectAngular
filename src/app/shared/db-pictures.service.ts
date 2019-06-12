import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class DbPicturesService {

  private imageArray:String[] = new Array() ;
  constructor() { }

  addPicture(imageBase64:any){
    console.log("add picture",imageBase64);
    this.imageArray.push(imageBase64);
   //azure???
  }

  getImages():any[]{
     return this.imageArray;
  }
}
