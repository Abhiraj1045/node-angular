import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.styl']
})


export class LoginRegistrationComponent implements OnInit {
  public user: User;
  @Output() operation :EventEmitter<any> = new EventEmitter(); 

  ngOnInit() {
    this.user = {
      userName: '',
      password: '',
      confirmPassword: '',
      email: '',
      isLogin : true
    }
  }

  performOperation(){
    console.log(this.user);
    this.operation.emit(this.user);
  }
}



/* this is an model for user */
interface User {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  isLogin: boolean;
}