import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup ,Validators} from '@angular/forms';
import { ApiService } from 'src/service/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiservice:ApiService) { }
  loginform:FormGroup
  ngOnInit(): void {

    this.loginform = new FormGroup({
      
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null)
      
});
  }


  OnSubmit(){
    this.apiservice.auth(this.loginform.value.email,this.loginform.value.password)
  }
}
