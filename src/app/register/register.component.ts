import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup ,Validators} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {ApiService} from '../../service/api.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  genders = ['M','F']
  
  asdf = ''
  imageSrc: any;
  fvs = ['Orthodox','Traditional']
  fts = ['independent','joint']
  fss = ['rice','moderate']
  nakshatras = ['poorvabhradha','revathi']
  mathas = ['UM']
  
  rashis = ['abc']
  height = ['5`9']

  gothra = [ 
    {
        "value":"gauthama",
        "label":"Gauthama"
    },
    {
        "value":"kashyapa",
        "label":"Kashyapa"
    },
    {
        "value":"Vishwamithra",
        "label":"Vishwamithra"
    }
    ]
    signupform : FormGroup
    selectedfile :File
    
  constructor(private apiservice:ApiService) { }
  

  ngOnInit(): void {
    this.signupform = new FormGroup({
      'profilename': new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required]),
      'dob': new FormControl(null),
      'pob': new FormControl(null),
      'gender': new FormControl('male'),
      'category':new FormControl(null),
      'matha':new FormControl(null),
      'mothertongue':new FormControl(null),
      'fathername':new FormControl(null),
      'mothername':new FormControl(null),
      'gothra':new FormControl(null),
      'nakshatra': new FormControl(null),
      'rashi': new FormControl(null),
      'height':new FormControl(null),
      'placeoflive':new FormControl(null),
      'aboutvadhuvara':new FormControl(null),
      'partnerpreference': new FormControl(null),
      'heightestqualification' :new FormControl(null),
      'mobilenumber':new FormControl(null),
      'alternatenumber':new FormControl(null),
      'currentcompany':new FormControl(null),
      'currentsalary':new FormControl(null),
      'familyvalues':new FormControl(null),
      'familytype':new FormControl(null),
      'familystatus': new FormControl(null),
      'profilepic':new FormControl(null)
});
  }
  
  onNakshatraSelected(value:string){
    alert(value)
    // setTimeout(() => {  console.log("World!"); }, 10000);
  }
  OnSubmit(){
    // this.service.postGrooms(this.signupform.value)
    // .subscribe(responce =>{
    //   console.log(responce.json())
    // },
    // (error:Response) =>{
    //   if(error.status === 404){
    //     this.signupform.setErrors(error.json())
    //     alert('already exists')
    //   }
    //   else{
    //     alert('Unexpected error occured')
    //     console.log(error)
    //   }

    // })
    console.log(this.signupform)
    const formdetails = this.signupform.value
    const payload = Object.assign(formdetails,{imagedata:this.selectedfile})
    
    this.apiservice.registerprofile(this.signupform.value,this.selectedfile)
    .subscribe(responce =>{
      // console.log(responce.json())
      // console.log(responce.status)
      
      //console.log(responce.json())
      alert('responce success')
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
    console.log('-------------------')
    
    
  }
  getValues(){
    console.log(this.asdf);
    this.signupform.get('gothra').value
  }
  onFileSelected(event:any){
    console.log(event)
    console.log(this.signupform)
    const imageData  = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(imageData); 
    reader.onload = (_event) => { 
      this.imageSrc = reader.result; 
    }
    this.selectedfile = imageData
    console.log( this.selectedfile)

  }

}
