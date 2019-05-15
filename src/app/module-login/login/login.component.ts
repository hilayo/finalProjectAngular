import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { SLoginService } from './slogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
 constructor(private slogin:SLoginService){

 }

  form: FormGroup = new FormGroup ({
   username: new FormControl('',[Validators.required, Validators.min(1),Validators.email]),
    password: new FormControl('',[Validators.required, Validators.min(1)]),
  });

  submit() {
    if (this.form.invalid)
     {
      this.error='User or password are not valid';
      return;
     }
     //call to server login
      this.slogin.callLogin(this.form.value.username,this.form.value.password).subscribe(res=>{
    //  this.slogin.callLogin("","hi").subscribe(res=>{
        alert(res);
      })


  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
