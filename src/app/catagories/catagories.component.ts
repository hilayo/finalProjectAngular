import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cloth } from '../cloth/Cloth';


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

export enum CLOTH_STYLE_CATEGORY {
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
  SHOES=7,
  OTHERS=8,

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
  @Input() cloth:Cloth;
  constructor() {
  }
  typesClothForm = new FormControl();
 seasonForm=new FormControl();
 clothStyleForm=new FormControl();

  typeClothList: string[];
  colorList :String[];
  seasonList :string[];
  clothStyleList: string[];

  ngOnInit() {
  this.colorList=Object.keys(COLOR_CATEGORY).map(key => COLOR_CATEGORY[key]).filter(value => typeof value === 'string');
  this.typeClothList=Object.keys(TYPE_ITEM_CATEGORY).map(key => TYPE_ITEM_CATEGORY[key]).filter(value => typeof value === 'string');
  this.seasonList=Object.keys(SEASONS_CATEGORY).map(key => SEASONS_CATEGORY[key]).filter(value => typeof value === 'string');
  this.clothStyleList=Object.keys(CLOTH_STYLE_CATEGORY).map(key => CLOTH_STYLE_CATEGORY[key]).filter(value => typeof value === 'string');
  }
}
