import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { SLoginService } from '../slogin.service';
import { Router } from '@angular/router';
import { DbPicturesService } from 'src/app/shared/db-pictures.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
  form: FormGroup;
  nameUser: string;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.email,
        Validators.pattern('^[a-zA-Z].*@.*\..+')
      ]),
      password: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }
  constructor(private slogin: SLoginService, private router: Router,private dbservice: DbPicturesService) { }

  checkValidation() {
    return this.form.valid;

  }
  submit() {
    this.slogin
      .callLogin(this.form.value.username, this.form.value.password)
      .subscribe(res => {
        if (!res) {
          this.error = 'User or password are not valid';
          return;
        }
        else {
          this.dbservice.setName(res.name);
          this.dbservice.setUserId(res.id);
          //this.router.navigate(['/homePage', this.nameUser]);
          this.router.navigate(['/homePage']);

        }

      });
  }
}
