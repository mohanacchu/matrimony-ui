import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TestService } from './test.service';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfilesComponent,
    MyprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgSelectModule,
    RouterModule.forRoot([
      {path : '', component:LoginComponent},
      {path : 'register',component:RegisterComponent},
      {path : 'profiles',component:ProfilesComponent},
      {path:'myprofile',component:MyprofileComponent}
      
    ])
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
