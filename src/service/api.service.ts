import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {TestService} from 'src/app/test.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private router:Router) { }
  private url_getprofiles = 'http://127.0.0.1:5000/api/profile'
  private url_register = 'http://127.0.0.1:5000/api/register'
  private url_login = 'http://127.0.0.1:5000/api/userlogin'
  private authObs:Observable<any>
  getprofiles(){
    return this.http.get(this.url_getprofiles,{headers:this.getauthtoken()})
    console.log('test')
   
  }

  registerprofile(jsondata:any,selectedfile:any){
        // console.log(jsondata)
        // console.log(jsondata.email)
        // console.log(selectedfile)
        const form_data = new FormData()
        for(var key in jsondata){
          form_data.append(key,jsondata[key])
        }
        
        // form_data.append('image',selectedfile)

        //form_data.append('email','chetanmuralidhar@gmail.com')
        form_data.append('File',selectedfile)
        return this.http.post(this.url_register,form_data,{headers:new HttpHeaders({'Accept':'multipart/form-data;'})}) //,{headers:new HttpHeaders({'Content-Type':'multipart/form-data;'})}
  }
  auth(email:string,password:string){
   
   this.authObs = this.http.post(this.url_login,{
      email:email,
      password:password
    })

      this.authObs.subscribe(resdata =>{
        console.log(resdata)
        localStorage.setItem('token',resdata['access_token'])
        this.router.navigate(['/profiles'])
      },errordata =>{
        console.log(errordata._body)
      })
  }
  getauthtoken(){
    let token = ''
    token = localStorage.getItem('token')
    return new HttpHeaders({'Authorization':'Bearer '+token})
  }

}