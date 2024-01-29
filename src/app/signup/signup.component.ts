import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {



  loginValues:any;

    constructor(private http: HttpClient, private route : ActivatedRoute, private router: Router){

    }



   addMember(value:any){



      this.http.post('https://localhost:7068/api/Member/',value).subscribe((response)=>{

      alert("account created successful")
      this.navigateTo("/login")

    },
    (error)=>{
      console.log(error)
      alert("an account with this email already exists!");
    }


    )



  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
