import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choose-cloth-view',
  templateUrl: './choose-cloth-view.component.html',
  styleUrls: ['./choose-cloth-view.component.scss']
})
export class ChooseClothViewComponent implements OnInit {
  @Input() arrayPictures: string[];
  constructor() { }

  ngOnInit() {

  }

}
