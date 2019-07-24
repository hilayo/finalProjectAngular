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

  @Input() cloth: Cloth;
  seasonList = SEASONS_CATEGORY;
  typeClothList=CLOTH_STYLE_CATEGORY;
  clothStyleList=CLOTH_STYLE_CATEGORY;
  colorList=COLOR_CATEGORY;


  form: FormGroup=new FormGroup({
  typesClothForm:new FormControl(),
  seasonForm:new FormControl(),
  clothStyleForm:new FormControl(),
  colorsClothForm:new FormControl()
  });

 constructor() {
//   @Output() getSelected: EventEmitter<Categories> = new EventEmitter();
//   selectedCategories: Categories = new Categories();
  //this.selectedCategories = { color: [], style: [], type: [], season: [] };
  debugger;
  if(this.cloth.seasons){
   let clothSeason = SEASONS_CATEGORY.filter(c => this.cloth.seasons.includes(c.key));
    this.form.value.seasonForm.setValue(clothSeason);
  }
  }
  ngOnInit() {
    this.colorList = Object.keys(COLOR_CATEGORY).map(key => COLOR_CATEGORY[key]).filter(value => typeof value === 'string');

    this.form.value.seasonForm.valueChanges.subscribe((value) =>{
      console.log(value)
      //    this.colorList = Object.keys(COLOR_CATEGORY)
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
    });
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
