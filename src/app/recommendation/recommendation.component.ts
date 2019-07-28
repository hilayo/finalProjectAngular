import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DbPicturesService } from '../shared/db-pictures.service';
import { RecommendationClothService } from './recommendation-cloth.service';
import { Cloth } from '../cloth/Cloth';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  @Input() temp: number;
  viewClothArray: Cloth[];
  constructor(private pictureService: DbPicturesService, private RecommendationService:RecommendationClothService) { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.pictureService.getClothesFromServer().subscribe((data: Cloth[]) => {
     this.viewClothArray= this.RecommendationService.getRecommendation(data,changes.temp.currentValue);
    }
    );
}
}
