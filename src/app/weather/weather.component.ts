import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WeatherService } from './weather.service';
import { WeatherData } from './weatherData';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})


export class WeatherComponent implements OnInit {
  lat: number;
  lng: number
  city:string="";
  country:string="";
  temp:number;
  description:string="";
  forecastSubscription:Subscription;
  icon:string;
  @Output() tempEM:EventEmitter<number> = new EventEmitter();

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
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
    this.forecastSubscription=this.weatherService.getForecast(this.lat, this.lng).subscribe(data=>{
      this.temp=data.main.temp;
      this.country=data.sys.country;
      this.city=data.name;
      this.description=data.weather[0].description;
      this.icon=data.weather[0].icon;
      this.tempEM.emit(this.temp);
    });

  }

  ngOnDestroy(): void {
    if(!!this.forecastSubscription)
          this.forecastSubscription.unsubscribe();
  }

}
