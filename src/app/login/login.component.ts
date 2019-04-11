import { Component, OnInit } from '@angular/core';
import { AjaxSvcsService } from '../ajax-svcs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  // isLogin: boolean;
  // loginObj: object;
  // registerObj: object;
  
  constructor(private ajaxSvcsService: AjaxSvcsService) {
    // this.isLogin = true;
    // this.loginObj = this.getLoginObj();
    // this.registerObj = this.getRegisterObj();
    
  }

   performOperation(user) {
     console.log(user);
    this.ajaxSvcsService.unAuthAjax(user,(response)=>{
      console.log(response);
     });
   }

  // validEmailId(email:string){
  //   return email.match('[a-zA-Z0-9_!.]+@[a-zA-Z]+[com|in|net]');
  // }
  // validate(){
  //   var isValid = false;
  //   if(this.isLogin){
  //    // this.validEmailId(loginObj.userName); 
  //   }else{

  //   }
  // }
  // login() {
  //   console.log(this.performOperation(this.loginObj));
  // }
  
  // register() {
  //   console.log(this.performOperation(this.registerObj));
  // }

  // getLoginObj(): object {
  //   return {
  //     "userName": "",
  //     "password": ""
  //   }
  // }

  // getRegisterObj(): object {
  //   return {
  //     "userName": "",
  //     "password": "",
  //     "confirmPass": ""
  //   }
  // }


}
