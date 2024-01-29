import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from 'express';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-enetlist',
    standalone: true,
    templateUrl: './enetlist.component.html',
    styleUrl: './enetlist.component.css',
    imports: [NavbarComponent, CommonModule, HttpClientModule, RouterModule, FooterComponent]
})
export class EnetlistComponent {
  public allEvents:any

  public eventById:any;


  constructor( private http:HttpClient, private router:ActivatedRoute){

  }

  ngOnInit(): void{
    this.getEvents();


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


}
