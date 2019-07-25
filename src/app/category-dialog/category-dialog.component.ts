import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Component, Inject} from '@angular/core';
import { Cloth } from '../cloth/Cloth';
import { FormGroup } from '@angular/forms';
import { DbPicturesService } from '../shared/db-pictures.service';
@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
})
export class CategoryDialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>
    ,@Inject(MAT_DIALOG_DATA) public cloth: Cloth , private dbService: DbPicturesService){
      console.log(cloth);
    }

    close(): void {
    this.dialogRef.close();
  }


  CatagoriesChange(form:FormGroup){
    this.cloth.color=form.value.colorsClothForm ? form.value.colorsClothForm.map(c => c.key) : null;
    this.cloth.typeOfItem=form.value.typesClothForm ? form.value.typesClothForm .map(c => c.key) : null;
    this.cloth.seasons=form.value.seasonForm ? form.value.seasonForm.map(c => c.key) : null;
    this.cloth.clothStyle=form.value.clothStyleForm ? form.value.clothStyleForm .map(c => c.key) : null;


  }
  updateCloth(){
    debugger;
     this.dbService.updateCloth(this.cloth);
     this.close();
  }

}
