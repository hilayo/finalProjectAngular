import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Component, Inject} from '@angular/core';
import { Cloth } from '../cloth/Cloth';
@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
})
export class CategoryDialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Cloth){


    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
