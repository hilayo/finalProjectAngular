import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { DbPicturesService } from '../shared/db-pictures.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CatagoriesComponent } from '../catagories/catagories.component';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';
import { Cloth } from './Cloth';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent implements OnInit {
  //@Input() ImageSrc: string;
  @Input() cloth:Cloth;
  @Output() deleteEM:EventEmitter<string> = new EventEmitter();
  constructor(private pictureService: DbPicturesService,public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.cloth);
  }

  openCatagories(){
    let dialogRef = this.dialog.open(CategoryDialogComponent, {
      height: '400px',
      width: '600px',
    });
  }
  deleteItem(id:string){
    this.deleteEM.emit(id);
  }
  choose(){

  }
}



