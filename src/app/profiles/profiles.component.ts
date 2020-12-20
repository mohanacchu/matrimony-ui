import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import {AuthResponceData, TestService} from 'src/app/test.service'
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles :any;
  error:any = null;
  isloading:boolean = true;
  constructor(private apiservice:ApiService,private testservice:TestService) { }

  private errorSub:Subscription;
  ngOnInit(): void {

    // this.testservice.signup('chetanmuralidhar@gmail.com','chetan').subscribe(resdata=>{
    //   console.log(resdata)
    // },error =>{
    //   console.log(error)
    // })
    let authObs:Observable<AuthResponceData>
    authObs = this.testservice.login('chetanmuralidhar@gmail.com','chetan')
    
    authObs.subscribe(resdata=>{
      console.log(resdata)
    },error =>{
      console.log(error)
    })

    this.apiservice.getprofiles()
    
    .subscribe(responce =>{
      // console.log(responce.json())
      console.log(responce)
      this.profiles = responce
      this.profiles = this.profiles['grooms']
      this.isloading = false;
      // console.log(this.profiles)
      // console.log(responce._body)
      //alert('responce success')
    },
    (error:Response) =>{
  
      if(error.status === 404){
        
        
        alert('already exists')
      }
      else{
        alert('Unexpected error occured')
        
        
        console.log(error)
      }
    }

    )
  }

}
