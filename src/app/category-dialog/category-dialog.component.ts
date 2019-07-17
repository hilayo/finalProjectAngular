import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Component, Inject} from '@angular/core';
@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
})
export class CategoryDialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>)
    /* ,@Inject(MAT_DIALOG_DATA) public data: DialogData)*/ {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
