import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule,ToastrModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  url='https://localhost:7068/api/User/GetByEmail';

loginValues:any;
available=true;
user=true;
member=true;

  constructor(private http: HttpClient, private route : ActivatedRoute, private router: Router,private authService: AuthenticationService){

  }

  clearFields(){

    const email = document.getElementById('Email') as HTMLInputElement
    const pass = document.getElementById('Password') as HTMLInputElement
    if(email.value==''&&pass.value==''){
      alert("fill all fields")
    }
    email.value=''
    pass.value=''
 }

 public login(values: {Email: string, Password: string}){
  console.log(values);




    this.UserExist(values)


    this.MemberExist(values)







 }
 id:any

 public UserExist(values: {Email: string, Password: string}){


  this.http.get("https://localhost:7068/api/User/GetByEmail/"+ values.Email+"/"+values.Password).subscribe((response) => {
    // Handle the response here
    console.log(response);
    this.user=true;
    const authToken = values.Email;
    console.log(authToken);
    this.authService.logout()
    this.authService.login(authToken);

    this.router.navigate(['/dashboard']);
  },
  (error) => {


    this.user=false
    console.error("error");


  }

  );



 }


 public MemberExist(values: {Email: string, Password: string}){


  this.http.get("https://localhost:7068/api/Member/GetByEmail/"+ values.Email+"/"+values.Password).subscribe((response) => {
    // Handle the response here
    console.log(response);
    this.member=true;
    const authToken = values.Email;
    console.log(authToken);// Replace with your actual token
    this.authService.logout()
    this.authService.login(authToken);
    this.router.navigate(['/']);
  },
  (error) => {

    this.member=false
    console.error("error");


  }

  );



 }




}
