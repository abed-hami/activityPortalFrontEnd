import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-guides',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SidebarComponent,RouterModule],
  templateUrl: './admin-guides.component.html',
  styleUrl: './admin-guides.component.css'
})
export class AdminGuidesComponent {

  constructor(private http:HttpClient, private auth: AuthenticationService){

  }

  route(value:any){
    this.auth.navigateTo(value)
  }

  ngOnInit(){
    this.getAllGuides()
  }

  guides:any


  getAllGuides(){
    this.http.get('https://localhost:7068/api/Guide').subscribe(
      (data:any) => {

        this.guides=data

        console.log(this.guides)

      }
    );

  }

  deleteGuide(id:any){
    this.http.delete('https://localhost:7068/api/Guide/'+id).subscribe(
      (data:any) => {

        alert("guide deleted successfully")
        this.ngOnInit()

      },
      (error)=>{
        alert("Error deleting guide")
      }
    );

  }

}
