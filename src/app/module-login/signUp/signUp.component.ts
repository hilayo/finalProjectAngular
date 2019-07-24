import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { SLoginService } from '../slogin.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class signUpComponent implements OnInit {
  @Input() errors: string | null;
  @Output() submitEM = new EventEmitter();
  form: FormGroup;

  constructor(private slogin: SLoginService , private fb:FormBuilder ) { }

  static confrimPasswordValidator (form: FormGroup){

    var password: string = form.controls.password.value;
    var confrimPassword: string =form.controls.confrimPassword.value ;
//debugger;
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
    alert(this.form.invalid);
    if (this.form.invalid) {
        alert(this.form.errors)
      this.errors = 'User or password are not valid';
      return;
    }
    // call to server login
    alert(this.form.value.name +"value");
    this.slogin
      .callLoginSignUp(this.form.value.username, this.form.value.password, this.form.value.name)
      .subscribe(res => {
        alert(res);
      });
  }



}
