import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { UploadPictureComponent } from './upload-picture.component';
import { SharedModule } from '../shared/shared.module';
import {  WebcamModule } from 'ngx-webcam';
import { ImageProccessingCoreModule } from '../image-proccessing-core/image-proccessing-core.module';
@NgModule({
  declarations: [UploadPictureComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    WebcamModule,
    ImageProccessingCoreModule
  ],
  exports: [UploadPictureComponent ]
})
export class UploadPictureModule { }
