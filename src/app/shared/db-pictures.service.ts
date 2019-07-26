import { Injectable } from "@angular/core";
import { Cloth } from "../cloth/Cloth";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { tap, map } from 'rxjs/operators';
// import {Subject} from "rxjs/Subject";
// import {Observable} from "rxjs/Observable";

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
  providedIn: "root"
})
export class DbPicturesService {
private choosenClothesArray: Cloth[] = new Array();

  url: string = "http://localhost:3000/clothes";
  private _clothsArray: BehaviorSubject<Cloth[]> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
    this.loadInitialData();
  }
     name:string;
     userId:string;

  addPicture(imageBase64: any) {
    const cloth: Cloth = {
     userId:this.userId,
      id: UID(),
      image: imageBase64,
      color: null,
      typeOfItem: null
    };
    this.saveCloth(cloth);
  }

  saveCloth(cloth: Cloth) {
    this.http.post(this.url, cloth).subscribe(data => {
      debugger;
      this._clothsArray.getValue().push(cloth);
      this._clothsArray.next(this._clothsArray.getValue());
    });
  }

  getCloths(): Observable<Cloth[]> {
    return new Observable(fn => this._clothsArray.subscribe(fn));
  }
  //   deletePicture(id:string){
  //     console.log(id)
  // ;    this.http.delete( `${this.url}/${id}`).subscribe(data=>console.log("delete success"));
  //   }

  loadInitialData() {
    this.initialArray();

    // this.http.get<Cloth[]>(this.url).
    // subscribe(data=> {this._clothsArray.next(data),
    //     err => console.log("Error retrieving Todos");
    // });
  }
  deletePicture(id: string) {
    this.http.delete(`${this.url}/${id}`).subscribe(data => {
      let clothsArray: Cloth[] = this._clothsArray.getValue();
      clothsArray.forEach((item, index) => {
        if (item.id === id) {
          clothsArray.splice(index, 1);
        }
      });
      this._clothsArray.next(clothsArray);
      console.log("delete success");
    });
  }
  search(selected) {
    console.log(selected);
    let clothsArray: Cloth[] = this._clothsArray.getValue();

    let results = this._clothsArray
      .getValue()
      .filter(cloth =>
        cloth.color.filter(c => c == selected.color.filter(col => (col = c)))
        )
        .filter((cloth)=>
        cloth.seasons.filter(s => s == selected.seasons.filter(se => (se = s)))
        )
        .filter((cloth)=>
        cloth.kindCloth.filter(k => k == selected.kindCloth.filter(kind => (kind = k))))
        .filter((cloth)=>
        cloth.typeOfItem.filter(t => t == selected.typeOfItem.filter(type => (type = t))))

      // [clothsArray[2]];
    this._clothsArray.next(results);
  }
 addToChoosenClothes(cloth:Cloth){
   this.choosenClothesArray.push(cloth);
  }
  getChoosenClothes() {
   return this.choosenClothesArray;
  }
  getName():string{
    return this.name;
  }
  setName(name:string):void{
    this.name = name;
  }

  getUserId():string{
    return this.userId;
  }
  setUserId(userId:string):void{
    this.userId = userId;
  }

  initialArray(){
    this.http.get<Cloth[]>(this.url).pipe(tap(x => console.log(x)),
     map((x: Cloth[]) => x.filter((y: Cloth) => y.userId === this.userId )),
    tap(x => console.log(x))).
    subscribe(data=> {this._clothsArray.next(data),
        err => console.log("Error retrieving Todos");
    });
  }
}
