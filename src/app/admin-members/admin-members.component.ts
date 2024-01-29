import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-admin-members',
    standalone: true,
    templateUrl: './admin-members.component.html',
    styleUrl: './admin-members.component.css',
    imports: [CommonModule, HttpClientModule, SidebarComponent,RouterModule]
})
export class AdminMembersComponent {
  constructor(private http:HttpClient, private auth: AuthenticationService){

  }

  ngOnInit(){
    this.getAllMembers()
  }

  members:any


  getAllMembers(){
    this.http.get('https://localhost:7068/api/Member').subscribe(
      (data:any) => {

        this.members=data

        console.log(this.members)

      }
    );

  }

  deleteMember(id:any){
    this.http.delete('https://localhost:7068/api/Member/'+id).subscribe(
      (data:any) => {

        alert("member deleted successfully")
        this.ngOnInit()

      },
      (error)=>{
        alert("Error deleting member")
      }
    );

  }
}
