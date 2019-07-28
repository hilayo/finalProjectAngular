import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { SLoginService } from '../slogin.service';
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

  constructor(private slogin: SLoginService ,private router: Router, private fb:FormBuilder ) { }

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
        'email': ['', [
          Validators.required,
          Validators.min(1),
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
          'password': ['', [Validators.required, Validators.min(1)]],
          'confrimPassword': ['',  [Validators.required, Validators.min(1)]],
          'userName':['',[Validators.required, Validators.min(1)]]

      },
     {validator : signUpComponent.confrimPasswordValidator });
  }

  submit() {
    this.slogin
      .callLoginSignUp(this.form.value.email, this.form.value.password, this.form.value.userName)
      .subscribe(res => {
        if(!res){
          this.error='fail sign up';
          return;
        }
        else{
        this.slogin.setName(this.form.value.userName);
        this.slogin.setUserId(res.id) ;
        this.router.navigate(['/homePage']);
      }
      });
  }



}
