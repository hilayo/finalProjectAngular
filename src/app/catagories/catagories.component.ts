import { Component, OnInit } from '@angular/core';

export enum CATEGORIES{

  COLOR=1,
  TYPE_ITEM=2,
  KIND_CLOTH=3,
  SEASONS=4,

}

export enum COLOR_CATEGORY {
  RED = 1,
  BLACK=2,
  WHITE=3,
  YELLOW=4,
  GREEN = 5,
  BLUE=6,
  PINK=7,
  PURPLE=8,
  BROWN=9,
  MIXCOLOR=10,
  ORANGE=11,
  JEANS=12,
  GREY=13,
}

export enum KIND_CLOTH_CATEGORY {
  ELEGANT = 1,
  CASUALE=2,
  WORK_CLOTH=3,
  EVENT=4,
  NIGHT_CLOTH = 5,
  SPORTIVE=6,
  PREGNACY=7,

}

export enum TYPE_ITEM_CATEGORY{
  SHIRT = 1,
  SKIRT=2,
  DRESS=3,
  SWEATER=4,
  PANTS = 5,
  ACCESSORIES=6,
  OTHERS=7,

}

export enum SEASONS_CATEGORY {
  SUMMER = 1,
  WINTER=2,
  FALL=3,
  SPRING=4,
}
@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.scss']
})


export class CatagoriesComponent implements OnInit {
  keys :String[];
  constructor() {
    this.keys = Object.keys(this.colors).filter(f => !isNaN(Number(f)));
  }
  colors = COLOR_CATEGORY;
//typeOfItem=TYPE_ITEM_CATEGORY;
  ngOnInit() {
  }

}
