import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { SLoginService } from '../slogin.service';
import { stat } from 'fs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class signUpComponent implements OnInit {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
  form: FormGroup;

  constructor(private slogin: SLoginService , private fb:FormBuilder ) { }

  static confrimPasswordValidator (control:AbstractControl){
    var password: string = control.get('password').value;
    var confrimPassword: string=control.get('confrimPassword').value;

    if(password!==confrimPassword)
        control.setErrors({ desc:"error!!" });

 }

  ngOnInit(): void {
    this.form=this.fb.group(
      {
        'username': ['', [
          Validators.required,
          Validators.min(1),
          Validators.email,
          Validators.pattern('^[a-zA-Z].*@.*\..+')]],
          'password': ['', [Validators.required, Validators.min(1)]],
          'confrimPassword': ['',  [Validators.required, Validators.min(1)]]

      },
     {Validators : signUpComponent.confrimPasswordValidator });
  }




  checkValidation(){

  }

  submit() {
    if (this.form.invalid) {
      this.error = 'User or password are not valid';
      return;
    }
    // call to server login
    this.slogin
      .callLogin(this.form.value.username, this.form.value.password)
      .subscribe(res => {
        alert(res);
      });
  }



}
