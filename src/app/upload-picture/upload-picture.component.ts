import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamUtil, WebcamInitError } from 'ngx-webcam';
import { DbPicturesService } from '../shared/db-pictures.service';
import { ImageProccessingService } from '../image-proccessing-core/image-proccessing.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';
import { Router } from '@angular/router';
import { imageProccessingMinOutput } from '../image-proccessing-core/image-proccessingOutput';


@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {

  cloth:any;

  colorArray:string[]= new Array();
  typeOfItemArray :string[]=new Array();

  constructor(private pictureService: DbPicturesService, private imgProccessService: ImageProccessingService,
    public dialog: MatDialog, private router: Router) {

  }

  ngOnInit(): void {

  }
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
  public savePicture() {

    this.cloth =this.pictureService.addPicture(this.webcamImage.imageAsBase64.toString());
    this.openCatagories();
    // this.router.navigate(['homePage/closet']);
  }

  //Please don't call this function in a loop my credit card will die and hunt you ,you been warned!!
  //call azure api Computer Vision
  public callAPI(url:string) {
    //THIS URL WORK WITH THE API:)
    //https://sc02.alicdn.com/kf/HTB1Je9EmrZnBKNjSZFGq6zt3FXaV/2017-latest-design-women-hand-made-sweater.jpg
    if(!url)
         return;
       var result:any=this.imgProccessService.CallImageProccessingApi(url).subscribe((data:imageProccessingMinOutput) => {
         debugger;
        this.pictureService.addPictureByUrl(url,[data.clothColor.toUpperCase()],data.clothCatgory.map(x=>x.toUpperCase()));
      console.log(data);
    })
   //

  }

  openCatagories() {

    this.dialog.open(CategoryDialogComponent, {
      height: '600px',
      width: '390px',
      data: this.cloth
    });
  }

}
