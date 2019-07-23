import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';
import { WeatherData } from './weatherData';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

//type ICallback = ( )  => void;

export class WeatherComponent implements OnInit {
  lat: number;
  lng: number
  city:string="";
  country:string="";
  temp:number;
  description:string="";
  forecast: Observable<WeatherData>=null;

  icon:string;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
   //this.setCurrentLocation(this.getForecast.bind(this));
   this.setCurrentLocation().then(() => this.getForecast()).catch((err) => console.log(err));

  }


  setCurrentLocation(){
    var promise = new Promise((resolve, reject) => {
    if(!navigator.geolocation){//set default coordinates of Jerusalem, Israel
        this.lat =  31.771959;
        this.lng = 35.217018;
        resolve();
        return;
    }
    navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
       resolve();
     } , reject);
    });
    return promise;
}


  //call api weather
  getForecast() {
    this.forecast= this.weatherService.getForecast(this.lat, this.lng);
    this.forecast.subscribe(data=>{
      this.temp=data.main.temp;
      this.country=data.sys.country;
      this.city=data.name;
      this.description=data.weather[0].description;
      this.icon=data.weather[0].icon;
    })

  }

}
