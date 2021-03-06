import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DbPicturesService } from '../shared/db-pictures.service';
import { MatDialog } from '@angular/material';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';
import { Cloth } from './Cloth';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent implements OnInit {
  @Input() cloth: Cloth;
  @Input() isChoosen: boolean;
  @Output() deleteEM: EventEmitter<string> = new EventEmitter();
  @Output() removeFavorite: EventEmitter<Cloth> = new EventEmitter();
  constructor(private pictureService: DbPicturesService, public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.cloth);
  }

  openCatagories() {
    this.dialog.open(CategoryDialogComponent, {
      height: '600px',
      width: '390px',
      data: this.cloth
    });
  }
  deleteItem(id: string) {
    this.deleteEM.emit(id);
  }
  choose(cloth: Cloth) {
    this.pictureService.addToChoosenClothes(cloth);
  }
  removeFromFavorite(cloth: Cloth) {
    this.removeFavorite.emit(cloth);
  }
}



