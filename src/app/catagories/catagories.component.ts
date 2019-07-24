import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { style } from "@angular/animations";
import { DbPicturesService } from '../shared/db-pictures.service';

export enum COLOR_CATEGORY {
  RED = 1,
  BLACK = 2,
  WHITE = 3,
  YELLOW = 4,
  GREEN = 5,
  BLUE = 6,
  PINK = 7,
  PURPLE = 8,
  BROWN = 9,
  MIXCOLOR = 10,
  ORANGE = 11,
  JEANS = 12,
  GREY = 13
}

export enum CLOTH_STYLE_CATEGORY {
  ELEGANT = 1,
  CASUALE = 2,
  WORK_CLOTH = 3,
  EVENT = 4,
  NIGHT_CLOTH = 5,
  SPORTIVE = 6,
  PREGNACY = 7
}

export enum TYPE_ITEM_CATEGORY {
  SHIRT = 1,
  SKIRT = 2,
  DRESS = 3,
  SWEATER = 4,
  PANTS = 5,
  ACCESSORIES = 6,
  SHOES = 7,
  OTHERS = 8
}

export enum SEASONS_CATEGORY {
  SUMMER = 1,
  WINTER = 2,
  FALL = 3,
  SPRING = 4
}
@Component({
  selector: "app-catagories",
  templateUrl: "./catagories.component.html",
  styleUrls: ["./catagories.component.scss"]
})
export class CatagoriesComponent implements OnInit {
  @Output() getSelected: EventEmitter<Categories> = new EventEmitter();
  selectedCategories: Categories = new Categories();

  constructor(private pictureService: DbPicturesService) {
    this.selectedCategories = { color: [], style: [], type: [], season: [] };
  }
  typesClothForm = new FormControl();
  seasonForm = new FormControl();
  clothStyleForm = new FormControl();
  colorsClothForm = new FormControl();

  typeClothList: string[];
  colorList: String[];
  seasonList: string[];
  clothStyleList: string[];

  ngOnInit() {
    this.colorList = Object.keys(COLOR_CATEGORY)
      .map(key => COLOR_CATEGORY[key])
      .filter(value => typeof value === "string");
    this.typeClothList = Object.keys(TYPE_ITEM_CATEGORY)
      .map(key => TYPE_ITEM_CATEGORY[key])
      .filter(value => typeof value === "string");
    this.seasonList = Object.keys(SEASONS_CATEGORY)
      .map(key => SEASONS_CATEGORY[key])
      .filter(value => typeof value === "string");
    this.clothStyleList = Object.keys(CLOTH_STYLE_CATEGORY)
      .map(key => CLOTH_STYLE_CATEGORY[key])
      .filter(value => typeof value === "string");

    this.typesClothForm.valueChanges.subscribe(
      (value: TYPE_ITEM_CATEGORY[]) => (this.selectedCategories.type = value)
    );
    this.seasonForm.valueChanges.subscribe(
      (value: SEASONS_CATEGORY[]) => (this.selectedCategories.season = value)
    );
    this.clothStyleForm.valueChanges.subscribe(
      (value: CLOTH_STYLE_CATEGORY[]) => (this.selectedCategories.style = value)
    );

    this.colorsClothForm.valueChanges.subscribe(
      (value: COLOR_CATEGORY[]) => (this.selectedCategories.color = value)
    );
  }
  seasonSelected(value) {
    console.log(this.selectedCategories);
  }
  search(event) {
    // this.getSelected.emit(this.selectedCategories);
    this.pictureService.search(event)
    console.log(this.selectedCategories);
  }
}
export class Categories {
  color: COLOR_CATEGORY[];
  style: CLOTH_STYLE_CATEGORY[];
  type: TYPE_ITEM_CATEGORY[];
  season: SEASONS_CATEGORY[];
}
