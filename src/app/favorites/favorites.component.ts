import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cloth } from '../cloth/Cloth';
import { DbPicturesService } from '../shared/db-pictures.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Output() deleteChoosen:EventEmitter<Cloth> = new EventEmitter();
  favoriteClothes:Cloth [] = new Array () ;
  isChoosen:boolean = true;
  constructor(private pictureService :DbPicturesService) {

  }

  ngOnInit() {
    this.favoriteClothes =this.pictureService.getChoosenClothes();
  }
  removeFromFavorites(cloth:Cloth){
    this.favoriteClothes.splice(this.favoriteClothes.findIndex(x => x == cloth), 1);
  }
}
