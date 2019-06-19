import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map ,tap} from 'rxjs/operators';
import {imageProccessingOutput,imageProccessingMinOutput} from './image-proccessingOutput';
@Injectable({
  providedIn: 'root'
})

export class ImageProccessingService {
 private url:string ="https://westeurope.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Color,Tags,Description&language=en";
private apiKey:string="1458ad28bb44457583a9276eb9c2ef00";
  constructor( private http:HttpClient) { }


   CallImageProccessingApi(ImageBase64:string) : Observable<any>
   {
      const httpOptions = {
                            headers: new HttpHeaders({
                              'Content-Type':  'application/json',
                              'Ocp-Apim-Subscription-Key': this.apiKey,
                              //'Authorization': 'my-auth-token',
                              'Access-Control-Allow-Origin':"*"
                            })
                           };
debugger;
      const body={ "url":"https://static.galmeetsglamcollection.com/media/catalog/product/k/0/k0130m-93-main.jpg" }
    return this.http.post<imageProccessingOutput>(this.url , body , httpOptions).pipe(map(result=>
   //   tap(result => console.log(result)),
      new imageProccessingMinOutput(result.color,result.tags,result.description)


       ));
  }
}


