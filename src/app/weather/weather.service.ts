import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from './weatherData';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey="14b3cf0827fc9fa5f94d4bcf5a3cf5fb";
  constructor( private http:HttpClient) { }


//openweathermap api
  public getForecast(lat:number,lon:number): Observable<WeatherData>{
    var url:string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${this.apiKey}`;
      return  this.http.get<WeatherData>(url)
  }

}
