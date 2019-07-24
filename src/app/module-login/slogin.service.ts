import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Users } from './users';

const UID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

@Injectable({
  providedIn: 'root'
})
export class SLoginService {

  constructor(private http:HttpClient) {

  }
path:string = 'https://reqres.in/api/login';
 url:string="http://localhost:3000/users";

  callLoginSignUp(user:string,password:string,name:string) : Observable<Users>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin':"*"
      })
    };

      let params = {
          'id' :UID,
         'email' : user,
         'password' : password,
         'name': name
     };
    return this.http.post<Users>(this.url , params , httpOptions);
}
callLogin(user:string,password:string) : Observable<Users>{
  return this.http.get<Users>(this.url);
}
}
