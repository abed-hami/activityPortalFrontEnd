import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-admineventlist',
    standalone: true,
    templateUrl: './admineventlist.component.html',
    styleUrl: './admineventlist.component.css',
    imports: [CommonModule, HttpClientModule, RouterModule, SidebarComponent]
})
export class AdmineventlistComponent {

  public allEvents:any

  public eventById:any;


  constructor( private http:HttpClient, private router:ActivatedRoute, private route:Router){

  }



  ngOnInit(): void{
    this.getEvents();

    this.getAssignedGuides()

  }

  guides:any

  getAssignedGuides( ){
    this.http.get('https://localhost:7068/api/GuideEvent/GetAssignedGuides').subscribe(
      (data:any) => {

          this.guides=data
        console.log(data)


      }
    )

  }




  public getEvents(){
    this.http.get('https://localhost:7068/api/Events').subscribe(
      (data:any) => {

          this.allEvents=data
        console.log(this.allEvents)

      }
    );
  }

  public getEventById(id:any){
    this.http.get('https://localhost:7068/api/Events/'+id).subscribe(
      (data:any) => {
        console.log(data);
        this.eventById=data;
      }
    );
  }

  public deletEvent(id:any){
    this.http.delete('https://localhost:7068/api/Events/'+id).subscribe(
      (data:any) => {
        alert("event deleted successfully")
        this.ngOnInit();

      },
      (error)=>{
        alert("Error in deleting the Event");
      }
    );
  }

  navigateTo(route: string): void {
    this.route.navigate([route]);
  }

}
