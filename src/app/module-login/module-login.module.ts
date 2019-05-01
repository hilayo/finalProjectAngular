import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule , MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  exports : [
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ]
})
export class LoginModule { }
