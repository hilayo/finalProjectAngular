import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { SLoginService } from '../slogin.service';
import { DbPicturesService } from 'src/app/shared/db-pictures.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class signUpComponent implements OnInit {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
  form: FormGroup;

  constructor(private slogin: SLoginService ,private router: Router, private fb:FormBuilder,private dbService:DbPicturesService ) { }

  static confrimPasswordValidator (form: FormGroup){

    var password: string = form.controls.password.value;
    var confrimPassword: string =form.controls.confrimPassword.value ;

    if(password!==confrimPassword)
    {
      form.controls.confrimPassword.setErrors({ mismatch: true });
    }
  else {
    form.controls.confrimPassword.setErrors(null);
    }
}

  ngOnInit(): void {
    this.form=this.fb.group(
      {
        'username': ['', [
          Validators.required,
          Validators.min(1),
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
          'password': ['', [Validators.required, Validators.min(1)]],
          'confrimPassword': ['',  [Validators.required, Validators.min(1)]],
          'name':['',[Validators.required, Validators.min(1)]]

      },
     {validator : signUpComponent.confrimPasswordValidator });
  }






  submit() {
    this.slogin
      .callLoginSignUp(this.form.value.username, this.form.value.password, this.form.value.name)
      .subscribe(res => {
        if(!res){
          this.error='fail sign up';
          return;
        }
        else{
        this.dbService.setName(this.form.value.name);
        this.dbService.setUserId(res.id) ;
        this.router.navigate(['/homePage']);
      }
      });
  }



}
