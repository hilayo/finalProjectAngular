import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DbPicturesService } from '../shared/db-pictures.service';
import { Cloth } from '../cloth/Cloth';

const COLOR_CATEGORY = [
  { key: 'RED', label: 'Red' },
  { key: 'BLACK', label: 'Black' },
  { key: 'WHITE', label: 'White' },
  { key: 'YELLOW', label: 'Yellow' },
  { key: 'BLUE', label: 'blue' },
  { key: 'PINK', label: 'Pimk' },
  { key: 'PURPLE', label: 'Purple' },
  { key: 'BROWN', label: 'Brown' },
  { key: 'MIXCOLOR', label: 'Mixcolor' },
  { key: 'ORANGE', label: 'Orange' },
  { key: 'JEANS', label: 'Jeans' },
  { key: 'GREY', label: 'Grey' }
];

const CLOTH_STYLE_CATEGORY = [
  { key: 'ELEGANT', label: 'Elegant' },
  { key: 'CASUALE', label: 'Casuale' },
  { key: 'WORK_CLOTH', label: 'Work ' },
  { key: 'EVENT', label: 'Event' },
  { key: 'NIGHT_CLOTH', label: 'Night  Cloth' },
  { key: 'SPORTIVE', label: 'Sportive' },
  { key: 'PREGNACY', label: 'Pregnacy' }
];


export const TYPE_ITEM_CATEGORY = [
  { key: 'SHIRT', label: 'Shirt' },
  { key: 'SKIRT', label: 'Skrit' },
  { key: 'DRESS', label: 'Dress' },
  { key: 'SWEATER', label: 'Sweater' },
  { key: 'PANTS', label: 'Pants' },
  { key: 'ACCESSORIES', label: 'Accessories' },
  { key: 'SHOES', label: 'Shoes' },
  { key: 'OTHERS', label: 'Other' }
];

const SEASONS_CATEGORY = [
  { key: 'SUMMER', label: 'Summer' },
  { key: 'WINTER', label: 'Winter' },
  { key: 'FALL', label: 'Fall' },
  { key: 'SPRING', label: 'Spring' }
];

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.scss']
})
export class CatagoriesComponent implements OnInit {
  @Output() getSelected: EventEmitter<Cloth> = new EventEmitter();
  @Output() submitForm = new EventEmitter();


  constructor(private pictureService: DbPicturesService) {
  }

  @Input() cloth: Cloth;

  seasonList = SEASONS_CATEGORY;
  typeClothList = TYPE_ITEM_CATEGORY;
  clothStyleList = CLOTH_STYLE_CATEGORY;
  colorList = COLOR_CATEGORY;

  colorsClothForm: FormControl = new FormControl();
  typesClothForm: FormControl = new FormControl();
  seasonForm: FormControl = new FormControl();
  clothStyleForm: FormControl = new FormControl();

  form: FormGroup = new FormGroup({
    colorsClothForm: this.colorsClothForm,
    typesClothForm: this.typesClothForm,
    seasonForm: this.seasonForm,
    clothStyleForm: this.clothStyleForm
  });

  ngOnInit() {

    /// from pop up dialog
    if (!!this.cloth) {
      //set cloth categories:
      //seasons
      const clothSeason = this.cloth.seasons.length > 0 ? SEASONS_CATEGORY.filter(c => this.cloth.seasons.includes(c.key)) : null;
      this.seasonForm.setValue(clothSeason);

      //type Cloth
      const clothType = this.cloth.typeOfItem.length > 0 ? TYPE_ITEM_CATEGORY.filter(c => this.cloth.typeOfItem.includes(c.key)) : null;
      this.typesClothForm.setValue(clothType);

      //cloth Style
      const clothStyle = this.cloth.clothStyle.length > 0 ? CLOTH_STYLE_CATEGORY.filter(c => this.cloth.clothStyle.includes(c.key)) : null;
      this.clothStyleForm.setValue(clothStyle);

      //color
      const color = this.cloth.color.length > 0 ? COLOR_CATEGORY.filter(c => this.cloth.color.includes(c.key)) : null;
      this.colorsClothForm.setValue(color);
    }
    this.form.valueChanges.subscribe(() => {
      this.submitForm.emit(this.form);
    });
  }

  search(event) {
    var selectedColor: string[] = this.form.value.colorsClothForm ? this.form.value.colorsClothForm.map(c => c.key) : [];
    var selectedTypeOfItem: string[] = this.form.value.typesClothForm ? this.form.value.typesClothForm.map(c => c.key) : [];
    var selectedSeasons: string[] = this.form.value.seasonForm ? this.form.value.seasonForm.map(c => c.key) : [];
    var selectedStyle: string[] = this.form.value.clothStyleForm ? this.form.value.clothStyleForm.map(c => c.key) : [];
    this.pictureService.search(selectedColor, selectedStyle, selectedSeasons, selectedTypeOfItem);
  }
}
