import { Injectable } from '@angular/core';
import { Cloth } from '../cloth/Cloth';

@Injectable({
  providedIn: 'root'
})
export class RecommendationClothService {
  recommendationClothes: Cloth[];
  constructor() { }

  getRecommendation(clothes: Cloth[], temp: number) {
    if (!!this.recommendationClothes)
      return this.recommendationClothes;
    return this.setRecommendationClothes(clothes, temp);
  }
  private setRecommendationClothes(clothes: Cloth[], temp: number): Cloth[] {
    if (!clothes || clothes.length <= 0 || !temp)
      return [];
    var top: Cloth;
    var buttom: Cloth;
    var shoes: Cloth;
    var accessories: Cloth;
    var dress: Cloth;
    var arrayFilterSeason: Cloth[];
    var season: string;

    if (temp <= 17) {//winter
      arrayFilterSeason = this.getClothsBySeason(clothes, "WINTER");
      season = "WINTER";
      top = this.getTypesOfItem(arrayFilterSeason, ["SWEATER"]);
    }
    else if (temp > 17 && temp <= 19) {//fall
      season = "FALL";
      arrayFilterSeason = this.getClothsBySeason(clothes, "FALL");
    }
    else if (temp > 19 && temp <= 22) {//spring
      season = "SPRING";
      arrayFilterSeason = this.getClothsBySeason(clothes, "SPRING");
    }
    else if (temp > 22) { //summer
      season = "SUMMER";
      arrayFilterSeason = this.getClothsBySeason(clothes, "SUMMER");

    }
    //if not exist cloth by that season then pick random cloth from db
    arrayFilterSeason = !!arrayFilterSeason ? arrayFilterSeason : clothes;

    top = !!top ? top : this.getTypesOfItem(arrayFilterSeason, ["SHIRT"]);
    buttom = this.getTypesOfItem(arrayFilterSeason, ["SKIRT", "PANTS"]);
    shoes = this.getTypesOfItem(arrayFilterSeason, ["SHOES"]);
    accessories = this.getTypesOfItem(arrayFilterSeason, ["ACCESSORIES", "OTHERS"]);
    dress = this.getTypesOfItem(arrayFilterSeason, ["DRESS"]);

    var chooseDress: number = Math.round(Math.random());
    var addAccessories: number = Math.round(Math.random());

    this.recommendationClothes = (chooseDress && !!dress && season != "WINTER") ? [dress, shoes] :
      [top, buttom, shoes];
    if (addAccessories && !!accessories)
      this.recommendationClothes.push(accessories)

    //remove null elements
    this.recommendationClothes = this.recommendationClothes.filter(c => c != null);
    return this.recommendationClothes;

  }

  //*you can see the typeOfItem in TYPE_ITEM_CATEGORY '../catagories/catagories.component'
  getTypesOfItem(clothes: Cloth[], types: string[]): Cloth {
    if (!clothes || clothes.length <= 0)
      return null;
    var filterArray: Cloth[] = clothes.filter(c =>
      (c.typeOfItem.filter(ct => types.includes(ct)).length > 0));
    //select random item from array
    return !!filterArray ? filterArray[Math.floor(Math.random() * filterArray.length)] : null;
  }


  getClothsBySeason(clothes: Cloth[], season: string): Cloth[] {
    if (!!clothes || clothes.length <= 0)
      return null;
    return clothes.filter(c => c.seasons.includes(season));
  }

}
