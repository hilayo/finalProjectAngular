import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './users';
import { tap, map } from 'rxjs/operators';

const UID = function () {
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

  constructor(private http: HttpClient) {

  }
  path: string = 'https://reqres.in/api/login';
  url: string = "http://localhost:3000/users";
  userName: string;
  userId: string;

  callLoginSignUp(user: string, password: string, name: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': "*"
      })
    };

    let params = {
      'id': UID,
      'email': user,
      'password': password,
      'name': name
    };
    return this.http.post<User>(this.url, params, httpOptions);
  }

  callLogin(email: string, password: string): Observable<User> {
       return this.http.get<User[]>(this.url ).pipe(
         tap(x => console.log(x)),
         map((x: User[]) => x.find((y: User) => y.email === email && y.password === password)),
         tap(x => console.log(x)));
     }

     getName(): string {
      return this.userName;
    }
    setName(name: string) {
      this.userName = name;
    }

    getUserId(): string {
      return this.userId;
    }
    setUserId(userId: string) {
      this.userId = userId;
    }

}
