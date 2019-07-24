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

  typesClothForm = new FormControl();
  seasonForm = new FormControl();
  clothStyleForm = new FormControl();


constructor() {
   //const selected = SEASONS_CATEGORY.filter(c => S_D.includes(c.key))
    //this.seasonForm.setValue(selected)

  }
  ngOnInit() {
    this.colorList = Object.keys(COLOR_CATEGORY).map(key => COLOR_CATEGORY[key]).filter(value => typeof value === 'string');
    this.seasonForm.valueChanges.subscribe((value) =>{
      console.log(value)
    })
  }
}
