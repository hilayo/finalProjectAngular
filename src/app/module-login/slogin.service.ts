import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { signUpOutput } from './signUp/signUpOutput';


@Injectable({
  providedIn: 'root'
})
export class SLoginService {

  constructor(private http:HttpClient) {

  }
path:string = 'https://reqres.in/api/login';

  callLogin(user:string,password:string) : Observable<signUpOutput>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin':"*"
      })
    };

      let params = {
         'email' : user,
         'password' : password
     };
    return this.http.post<signUpOutput>(this.path , params , httpOptions);

}
}
