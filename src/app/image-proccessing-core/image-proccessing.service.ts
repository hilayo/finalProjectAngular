import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { imageProccessingOutput, imageProccessingMinOutput } from './image-proccessingOutput';
@Injectable({
  providedIn: 'root'
})

export class ImageProccessingService {
  private url: string = "https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Color,Tags,Description&language=en";

 private apiKey: string = "ba8442ccac3941e1857ae6360c1ed6cf";
  constructor(private http: HttpClient) { }


  CallImageProccessingApi(imageUrl: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.apiKey,
        'Access-Control-Allow-Origin': "*"
      })
    };
   const body = { "url": imageUrl }
    return this.http.post<imageProccessingOutput>(this.url, body, httpOptions).pipe(map(result =>
      new imageProccessingMinOutput(result.color, result.tags, result.description)
   ));
    //const body = { "url": img };
  }


  // CallImageProccessingApiBase64(ImageBase64: string): Observable<any> {

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'image/jpeg',
  //      // 'Content-Length': img.length,
  //       'Ocp-Apim-Subscription-Key': this.apiKey,
  //       'Access-Control-Allow-Origin': "*"
  //     })
  //   };
  //   const body  = { "url": ImageBase64 };
  //      //const body = { "url": d };
  //   return this.http.post<imageProccessingOutput>(this.url, body, httpOptions).pipe(map(result =>
  //     new imageProccessingMinOutput(result.color, result.tags, result.description)
  //  ));

  // }


//  dataURItoBlob(dataURI) {
//   // convert base64/URLEncoded data component to raw binary data held in a string
//   var byteString;
//   if (dataURI.split(',')[0].indexOf('base64') >= 0)
//       byteString = atob(dataURI.split(',')[1]);
//   else
//       byteString = unescape(dataURI.split(',')[1]);

//   // separate out the mime component
//   var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

//   // write the bytes of the string to a typed array
//   var ia = new Uint8Array(byteString.length);
//   for (var i = 0; i < byteString.length; i++) {
//       ia[i] = byteString.charCodeAt(i);
//   }

//   return new Blob([ia], {type:mimeString});
// }



}

