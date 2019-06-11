import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';


@Injectable({
  providedIn: 'root'
})
export class DbPicturesService {

  constructor() { }

  addPicture(picture:WebcamImage){
    console.log("add picture",picture);
   //azure???
  }
}
