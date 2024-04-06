import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import {MustMatch} from '../password-validator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit {

  newForm: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.newForm = this.formBuilder.group({
      firstName: new FormControl('',
        [Validators.required, Validators.pattern('^[a-zA-Z]{3,199}$')]),
      lastName: new FormControl('',
        [Validators.required, Validators.pattern('^[a-zA-Z]{3,199}$')]),
      email: new FormControl('',
        [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      userName: new FormControl('',
        [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{4,50}$')]),
      password: new FormControl('',
        [Validators.required,  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{8,30}$')]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit(form: FormGroup): void {
    console.log(form.value);
    this.router.navigateByUrl('login');
    const myObj = {
      uName: this.newForm.controls.userName.value, 
      uPassword: this.newForm.controls.password.value
    };
    localStorage.setItem('object', JSON.stringify(myObj));
  }


}
