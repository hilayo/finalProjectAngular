import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { UploadPictureComponent } from './upload-picture.component';
import {  WebcamModule } from 'ngx-webcam';
import { ImageProccessingCoreModule } from '../image-proccessing-core/image-proccessing-core.module';
import { UploadPictureRoutingModule } from './upload-picture-routing.moudle';

@NgModule({
  declarations: [UploadPictureComponent],
  imports: [
    CommonModule,
    FormsModule,
    WebcamModule,
    ImageProccessingCoreModule,
    UploadPictureRoutingModule
  ],
  exports: [UploadPictureComponent ]
})
export class UploadPictureModule { }
