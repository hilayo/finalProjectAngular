import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { imageProccessingOutput, imageProccessingMinOutput } from './image-proccessingOutput';
@Injectable({
  providedIn: 'root'
})

export class ImageProccessingService {
  //private url: string = "https://westeurope.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Color,Tags,Description&language=en";
  private url: string = "https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Color,Tags,Description&language=en";

 // private apiKey: string = "1458ad28bb44457583a9276eb9c2ef00";
 private apiKey: string = "ba8442ccac3941e1857ae6360c1ed6cf";
  constructor(private http: HttpClient) { }


  CallImageProccessingApi(ImageBase64: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.apiKey,
        'Access-Control-Allow-Origin': "*"
      })
    };
    // const body = { "url": "https://ae01.alicdn.com/kf/HTB1GUs2JpXXXXakXXXXq6xXFXXXz/2015-fall-sweaters-for-women-pull-long-sweater-woman-pullovers-knitwear-fashion-mori-girl-sueter-mujer.jpg" }
    // return this.http.post<imageProccessingOutput>(this.url, body, httpOptions).pipe(map(result =>
    //   new imageProccessingMinOutput(result.color, result.tags, result.description)
    // ));
    const body = { "url": ImageBase64 };
    return this.http.post<imageProccessingOutput>(this.url, body, httpOptions).pipe(map(result =>
      new imageProccessingMinOutput(result.color, result.tags, result.description)
    ));
  }
}


