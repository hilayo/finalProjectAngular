import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule , MatFormFieldModule,MatInputModule} from '@angular/material';
import { ClarityModule } from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,

    ClarityModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,

    MatInputModule,
    ClarityModule,
    ReactiveFormsModule,
    MatButtonModule


  ]
})
export class LoginModule { }
