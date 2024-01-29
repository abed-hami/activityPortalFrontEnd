import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {


  constructor(private http: HttpClient,private route:ActivatedRoute, private auth:AuthenticationService){

  }

  addUser(value:any){
    this.http.post('https://localhost:7068/api/User',value).subscribe((response)=>{
      alert("added successful")
      this.auth.navigateTo('/users')
    },
    (error)=>{
      console.log(error)
      alert("Error in saving the data");
    }


    )

  }

}
