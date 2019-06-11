import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WebcamModule} from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { UploadPictureComponent } from './upload-picture.component';

@NgModule({
  declarations: [UploadPictureComponent],
  imports: [
    CommonModule,
    WebcamModule,
    FormsModule
  ],
  exports: [UploadPictureComponent ]
})
export class UploadPictureModule { }
