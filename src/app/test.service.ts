import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Subject } from 'rxjs';

export interface AuthResponceData{
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class TestService {
  authdata:string = 'asdfg';
  constructor(private http:HttpClient) { }
  errors = new Subject<string>();
  private url_getprofiles = 'http://127.0.0.1:5000/grooms'
  private url_register = 'http://127.0.0.1:5000/register'
  getprofiles(){
    return this.http.get(this.url_getprofiles,{headers:new HttpHeaders({'custom-header':'custom'})})
   .subscribe(resonce =>{
     console.log('---------------------------')
     console.log(resonce)
     
     console.log('---------------------------')
   },error =>{
     this.errors = error.message;
     
     console.log(error)
   });
   
  }

  signup(email:string,password:string){
    return this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPw1jVhHyA4TnyNluoFtiaDdf5K8DU-pg',{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
  login(email:string,password:string){
    return this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPw1jVhHyA4TnyNluoFtiaDdf5K8DU-pg',{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}
