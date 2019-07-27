import { Injectable } from "@angular/core";
import { Cloth } from "../cloth/Cloth";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
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
  providedIn: "root"
})
export class DbPicturesService {
  private choosenClothesArray: Cloth[] = new Array();
  url: string = "http://localhost:3000/clothes";
  name: string;
  userId: string;

  private _clothsArray: BehaviorSubject<Cloth[]> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
    this.loadInitialData();
  }


  loadInitialData() {
    this.http.get<Cloth[]>(this.url)
    .subscribe(data => {
          this._clothsArray.next(data),
            err => console.log("Error retrieving Todos");})
  }

  addPicture(imageBase64: any) {
    const cloth: Cloth = {
      userId: this.userId,
      id: UID(),
      image: imageBase64,
      isImagebase64: true,
      color: null,
      typeOfItem: null,
      clothStyle: new Array(),
      seasons: new Array(),
    };
    this.saveCloth(cloth);
  }

  saveCloth(cloth: Cloth) {
    this.http.post(this.url, cloth).subscribe(data => {
      this._clothsArray.getValue().push(cloth);
      this._clothsArray.next(this._clothsArray.getValue());
    });
  }

  getCloths(): Observable<Cloth[]> {
    return new Observable(fn => this._clothsArray.subscribe(fn));
  }


  addToChoosenClothes(cloth: Cloth) {
    this.choosenClothesArray.push(cloth);
  }
  getChoosenClothes() {
    return this.choosenClothesArray;
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

  updateCloth(cloth: Cloth) {
    console.log(cloth);
    this.http.put(`${this.url}/${cloth.id}`, cloth).subscribe(data => {
      let clothsArray: Cloth[] = this._clothsArray.getValue();
      clothsArray[cloth.id] = cloth;
      this._clothsArray.next(clothsArray);
      console.log("update success");
    });
  }

  search(color: string[], clothStyle: string[], seasons: string[], typeOfItem: string[]) {
    console.log(color, clothStyle, seasons, typeOfItem);
    //let clothsArray: Cloth[] = this._clothsArray.getValue();

    let results = this._clothsArray.getValue();
    console.log(results);
    if (results != null) {
      if (color.length > 0) {
        results = results.filter(cloth =>
          cloth.color.filter(c => color.includes(c)));

      }
      if (clothStyle.length > 0) {
        results = results
          .filter(cloth =>
            cloth.clothStyle.filter(c => clothStyle.includes(c)));
      }
      if (seasons.length > 0) {
        results = results
          .filter(cloth =>
            cloth.seasons.filter(c => seasons.includes(c)));
      }
      if (typeOfItem.length > 0) {
        results = results
          .filter(cloth =>
            cloth.typeOfItem.filter(c => typeOfItem.includes(c)));
      }
      //   .filter((cloth) =>
      //   cloth.seasons.filter(c => !seasons.includes(c)))
      // .filter((cloth) =>
      //   cloth.seasons.filter(c => !seasons.includes(c)))
      // .filter((cloth) =>
      //   cloth.clothStyle.filter(c => !clothStyle.includes(c)))
      // .filter((cloth) =>
      // cloth.typeOfItem.filter(c => !typeOfItem.includes(c)))
      // [clothsArray[2]];
    }
    this._clothsArray.next(results);
  }


  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }

  getUserId(): string {
    return this.userId;
  }
  setUserId(userId: string): void {
    this.userId = userId;
  }



}
