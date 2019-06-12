import { Component, OnInit,Input } from '@angular/core';
import { DbPicturesService } from '../shared/db-pictures.service';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent implements OnInit {
  @Input() ImageSrc: string;
  constructor(private pictureService: DbPicturesService) { }

  ngOnInit() {

  }

}
