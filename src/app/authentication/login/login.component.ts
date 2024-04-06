import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private service: StoreService  
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(''),
      passWord: new FormControl('')
    });
  }

  loginGo(): void {
    const item = JSON.parse(localStorage.getItem('object') as any);

    if (this.loginForm.controls['username'].value !== item.uName || this.loginForm.controls['passWord'].value !== item.uPassword) {
     alert('Wrong credentials!');
   }else {
     this.service.checkLoggedIn(true);
     alert('Login Succesfull!');
     this.router.navigateByUrl('news');  
   }
  }

}
