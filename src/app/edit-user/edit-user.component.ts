import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FetchService } from '../fetch.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SidebarComponent,RouterModule, FormsModule,CalendarModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  id:any;

  public userId:any;

  dob:any
  


  constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router ){

  }

  ngOnInit(): void{

    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.getUserId(this.id);

  }

 public getUserId(id:any){
        this.http.get('https://localhost:7068/api/User/GetById/'+id).subscribe(
          (data) => {
           this.userId=data;
            console.log(data);
            this.dob= this.userId.dateOfBirth



          }
        );

 }


   editUser(value:any){
     this.http.put('https://localhost:7068/api/User/'+this.id,value).subscribe((response)=>{
       alert("edit successful")
       this.navigateTo('/users')
     },
     (error)=>{
       console.log(error)
       alert("Error in saving the data");
     }


     )

   }

   navigateTo(route: string): void {
     this.router.navigate([route]);
   }
}
