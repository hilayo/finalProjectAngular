import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  lat: number;
  lng: number;
  forecast: Observable<any>;
  constructor() { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
     });
   } else {
     /// default coords
    this.lat = 40.73;
    this.lng = -73.93;
   }
  }

  //call api weather
  getForecast() {
    // this.forecast = this.weather.currentForecast(this.lat, this.lng)
    //   .do(data => console.log(data))
    //this.forecast ="200";
  }

}
