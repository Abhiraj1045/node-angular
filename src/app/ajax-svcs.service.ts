import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
 @ Injectable({
  providedIn: 'root'
})
export class AjaxSvcsService{
  
  constructor(private httpClient :HttpClient,location:Location){ 
    }
    

  doGet(url:string){
   this.httpClient.get(url).subscribe(data=>{
     return data;
   });
  }
  
  unAuthAjax(data){
   return this.doPost('posts/rest/unAuth',data);
  }

  authAjax(data){
   data['withCredentials'] =true;
   return this.doPost('posts/rest/auth',data);
  }

  doPost(url:string, value:any){
    return new Observable(o=>{
      Object.keys(value).forEach((key) => (value[key] == null || value[key]=="" || value[key]== undefined) && delete value[key]);
      this.httpClient.post(url, value).subscribe((value:AppResponse)=>{
        if(value.isError){

        }
        o.next(value);
        o.complete();
      },error=>{
        o.error(`Error occured : ${error}`)
      })
    });
    
   }
}
interface AppResponse{
  isLoginDone:boolean;
  isError : boolean;
  errorMsg: string;
  data : Object;
}