import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SLoginService {

  constructor(private http:HttpClient) {

  }
path:string = 'https://reqres.in//api/login';

  callLogin(user:string,password:string) : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

      let params = {
         'email' : user,
         'password' : password
     };
    return this.http.post<any>(this.path , params , httpOptions);

}
}
