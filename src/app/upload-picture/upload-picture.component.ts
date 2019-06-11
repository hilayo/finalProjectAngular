import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamUtil, WebcamInitError } from 'ngx-webcam';
import { DbPicturesService } from '../shared/db-pictures.service';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {

  constructor(private pictureService:DbPicturesService){

  }
  ngOnInit(): void {

  }
  //public seconds:number ;
   private trigger: Subject<void> = new Subject<void>();


  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
         this.trigger.next();

  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  public savePicture()
  {

      this.pictureService.addPicture(this.webcamImage);
  }
}
