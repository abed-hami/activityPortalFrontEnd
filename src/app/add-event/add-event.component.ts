import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterModule, FormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {


  constructor(private http: HttpClient,private route:ActivatedRoute, private auth:AuthenticationService){

  }

  addEvent(value:any){
    this.http.post('https://localhost:7068/api/Events',value).subscribe((response)=>{
      alert("added successful")
      this.auth.navigateTo('/adminEvents')
    },
    (error)=>{
      console.log(error)
      alert("Error in saving the data");
    }


    )

  }

}
