import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-add-guide',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule],
  templateUrl: './add-guide.component.html',
  styleUrl: './add-guide.component.css'
})
export class AddGuideComponent {

  constructor(private http: HttpClient,private route:ActivatedRoute, private auth:AuthenticationService){

    }

  addGuide(value:any){
    this.http.post('https://localhost:7068/api/Guide',value).subscribe((response)=>{
      alert("added successful")
      this.auth.navigateTo('/guides')
    },
    (error)=>{
      console.log(error)
      alert("Error in saving the data");
    }


    )
  }





}
