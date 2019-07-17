import { Component, OnInit,Input } from '@angular/core';
import { DbPicturesService } from '../shared/db-pictures.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CatagoriesComponent } from '../catagories/catagories.component';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent implements OnInit {
  @Input() ImageSrc: string;
  constructor(private pictureService: DbPicturesService,public dialog: MatDialog) { }

  ngOnInit() {

  }

  openCatagories(){
    let dialogRef = this.dialog.open(CategoryDialogComponent, {
      height: '400px',
      width: '600px',
    });
  }

}



