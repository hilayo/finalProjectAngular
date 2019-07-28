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
  userName: string;
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

  getClothesFromServer(){
   return this.http.get<Cloth[]>(this.url);
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
    return this._clothsArray.asObservable();
  }


  addToChoosenClothes(cloth: Cloth) {
    console.log(this.choosenClothesArray.length);
    this.choosenClothesArray.push(cloth);
  }
  getChoosenClothes() {
    console.log(this.choosenClothesArray);
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
    this.getClothesFromServer().subscribe(data=> {
    let results = data;
    console.log(results);
    if (results != null) {
      if (color.length > 0) {
        results = results.filter(cloth =>
          cloth.color.filter(c => color.includes(c)).length > 0 );

      }
      if (clothStyle.length > 0) {
        results = results
          .filter(cloth =>
            cloth.clothStyle.filter(c => clothStyle.includes(c)).length > 0 );
      }
      if (seasons.length > 0) {
        results = results
          .filter(cloth =>
            cloth.seasons.filter(c => seasons.includes(c)).length > 0 );
      }
      if (typeOfItem.length > 0) {
        results = results
          .filter(cloth =>
            cloth.typeOfItem.filter(c => typeOfItem.includes(c)).length > 0 );
      }

    }

    this._clothsArray.next(results);
      });
  }





}
