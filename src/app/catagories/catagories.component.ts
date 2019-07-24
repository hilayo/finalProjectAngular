import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cloth } from '../cloth/Cloth';

const COLOR_CATEGORY =[
  {key:'RED',label:'Red'},
  {key:'BLACK',label:'Black'},
  {key:'WHITE',label:'White'},
  {key:'YELLOW',label:'Yellow'},
  {key:'BLUE',label:'blue'},
  {key:'PINK',label:'Pimk'},
  {key:'PURPLE',label:'Purple'},
  {key:'BROWN',label:'Brown'},
  {key:'MIXCOLOR',label:'Mixcolor'},
  {key:'ORANGE',label:'Orange'},
  {key:'JEANS',label:'Jeans'},
  {key:'GREY',label:'Grey'}
];

const CLOTH_STYLE_CATEGORY =[
  {key:'ELEGANT',label:'Elegant'},
  {key:'CASUALE',label:'Casuale'},
  {key:'WORK_CLOTH',label:'Work '},
  {key:'EVENT',label:'Event'},
  {key:'NIGHT_CLOTH',label:'Night  Cloth'},
  {key:'SPORTIVE',label:'Sportive'},
  {key:'PREGNACY',label:'Pregnacy'}
];


const TYPE_ITEM_CATEGORY =[
  {key:'SHIRT',label:'Shirt'},
  {key:'SKIRT',label:'Skrit'},
  {key:'DRESS',label:'Dress'},
  {key:'SWEATER',label:'Sweater'},
  {key:'PANTS',label:'Pants'},
  {key:'ACCESSORIES',label:'Accessories'},
  {key:'SHOES',label:'Shoes'},
  {key:'OTHERS',label:'Other'}
];

 const SEASONS_CATEGORY =[
  {key:'SUMMER',label:'Summer'},
  {key:'WINTER',label:'Winter'},
  {key:'FALL',label:'Fall'},
  {key:'SPRING',label:'Spring'}
];

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.scss']
})
 export class CatagoriesComponent implements OnInit {
//   @Output() getSelected: EventEmitter<Categories> = new EventEmitter();
//   selectedCategories: Categories = new Categories();
  @Input() cloth: Cloth;
  seasonList = SEASONS_CATEGORY;
  typeClothList=TYPE_ITEM_CATEGORY;
  clothStyleList=CLOTH_STYLE_CATEGORY;
  colorList=COLOR_CATEGORY;

  colorsClothForm:FormControl = new FormControl();
  typesClothForm:FormControl = new FormControl();
  seasonForm:FormControl = new FormControl();
  clothStyleForm:FormControl = new FormControl();


constructor() {
//  this.selectedCategories = { color: [], style: [], type: [], season: [] };
   //const clothSeason = SEASONS_CATEGORY.filter(c => this.cloth.includes(c.key));
   // this.seasonForm.setValue(clothSeason);

  }
  ngOnInit() {
   // this.colorList = Object.keys(COLOR_CATEGORY).map(key => COLOR_CATEGORY[key]).filter(value => typeof value === 'string');
    // this.colorList = Object.keys(COLOR_CATEGORY)
    //   .map(key => COLOR_CATEGORY[key])
    //   .filter(value => typeof value === "string");
    // this.typeClothList = Object.keys(TYPE_ITEM_CATEGORY)
    //   .map(key => TYPE_ITEM_CATEGORY[key])
    //   .filter(value => typeof value === "string");
    // this.seasonList = Object.keys(SEASONS_CATEGORY)
    //   .map(key => SEASONS_CATEGORY[key])
    //   .filter(value => typeof value === "string");
    // this.clothStyleList = Object.keys(CLOTH_STYLE_CATEGORY)
    //   .map(key => CLOTH_STYLE_CATEGORY[key])
    //   .filter(value => typeof value === "string");

    // this.typesClothForm.valueChanges.subscribe(
    //   (value: TYPE_ITEM_CATEGORY[]) => (this.selectedCategories.type = value)
    // );
    // this.seasonForm.valueChanges.subscribe(
    //   (value: SEASONS_CATEGORY[]) => (this.selectedCategories.season = value)
    // );
    // this.clothStyleForm.valueChanges.subscribe(
    //   (value: CLOTH_STYLE_CATEGORY[]) => (this.selectedCategories.style = value)
    // );

    // this.colorsClothForm.valueChanges.subscribe(
    //   (value: COLOR_CATEGORY[]) => (this.selectedCategories.color = value)
    // );


 //   this.seasonForm.valueChanges.subscribe((value) =>{
   //   console.log(value)
  //  })
  }
  // seasonSelected(value) {
  //   console.log(this.selectedCategories);
  // }
  // search(event) {
  //   // this.getSelected.emit(this.selectedCategories);
  //   this.pictureService.search(event)
  //   console.log(this.selectedCategories);
  // }
}
// export class Categories {
//   color: COLOR_CATEGORY[];
//   style: CLOTH_STYLE_CATEGORY[];
//   type: TYPE_ITEM_CATEGORY[];
//   season: SEASONS_CATEGORY[];
// }
