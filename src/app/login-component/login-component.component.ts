import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  singupUsers: any[] = [];
  singupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    password: ''
  }

constructor() {}

ngOnInit(): void {
  const localData = localStorage.getItem('singUpUsers');
  if(localData != null) {
    this.singupUsers = JSON.parse(localData)
   
  }

  
}


onSingUp() {
  this.singupUsers.push(this.singupObj);
  localStorage.setItem('singUpUsers', JSON.stringify(this.singupUsers))
  this.singupObj = {
    userName: '',
    email: '',
    password: ''
  };
}

onLogin() {
  
  const isUserExist = this.singupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
  if(isUserExist != undefined) {
    alert('User Login Successfuly')
  } else {
    alert('Wrong Credentials')
  }

}

}
