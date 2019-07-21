import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    MatCardModule

  ],
  providers: [WeatherService]
})
export class WeatherModule { }
