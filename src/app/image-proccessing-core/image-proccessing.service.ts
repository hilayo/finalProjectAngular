import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageProccessingService {
 url:string ="https://westeurope.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories&details=Celebrities&language=en"
  constructor( private http:HttpClient) { }

   CallImageProccessingApi(ImageBase64:string) : Observable<any>
   {

      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token',
      //  'Access-Control-Allow-Origin':"*",
        'Ocp-Apim-Subscription-Key':"1458ad28bb44457583a9276eb9c2ef00"
        // 'visualFeatures' : "Categories,Color,Description,Tags,ImageType",
        // "language": "en"
      })
      };
      const body={
        "url":"https://images-na.ssl-images-amazon.com/images/I/81kBsb3UgFL._SX425_.jpg"
      }

        // let params = {
        //   'visualFeatures' : "Categories,Color,Description,Tags,ImageType",
        //   "language": "en",
        //   "details": "{string}"};

//https://westeurope.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories&language=en
debugger;
    return this.http.post<any>(this.url , body , httpOptions);
  }
}
// export class signUpOutput{
//   token:string;

// }


