import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent {

  id:any;

 public eventById:any;

 sDate:any;
 eDate:any;

 constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router ){

 }

 ngOnInit(): void{

   this.id=this.route.snapshot.paramMap.get('id');
   this.getEventById(this.id);
 }

public getEventById(id:any){
       this.http.get('https://localhost:7068/api/Events/'+id).subscribe(
         (data) => {
          this.eventById=data;
           console.log(data);
           this.sDate=this.eventById.startDate ;
           this.eDate=this.eventById.endDate;

         }
       );

}

  editEvent(value:any){
    this.http.put('https://localhost:7068/api/Events/'+this.id,value).subscribe((response)=>{
      alert("edit successful")
      this.navigateTo('/adminEvents')
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
