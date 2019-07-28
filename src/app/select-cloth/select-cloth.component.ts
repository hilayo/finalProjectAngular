import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cloth } from '../cloth/Cloth';
import { DbPicturesService } from '../shared/db-pictures.service';

@Component({
  selector: 'app-select-cloth',
  templateUrl: './select-cloth.component.html',
  styleUrls: ['./select-cloth.component.scss']
})
export class SelectClothComponent implements OnInit {

  @Output() deleteChoosen: EventEmitter<Cloth> = new EventEmitter();
  selectClothes: Cloth[] = new Array();
  isChoosen: boolean = true;
  constructor(private pictureService: DbPicturesService) {

  }

  ngOnInit() {
    this.selectClothes = this.pictureService.getChoosenClothes();
  }
  removeFromFavorites(cloth: Cloth) {
    this.selectClothes.splice(this.selectClothes.findIndex(x => x == cloth), 1);
  }
}
