import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    imports: [CommonModule,HttpClientModule, SidebarComponent, RouterModule]
})
export class UsersComponent {

  users:any

  constructor(private http:HttpClient, private router:Router){

  }

  ngOnInit(){
    this.getUsers()
  }

  public getUsers(){
    this.http.get('https://localhost:7068/api/User').subscribe(
      (data:any) => {

          this.users=data
        console.log(this.users)

      }
    );
  }

  public deleteUser(id:any){
    this.http.delete('https://localhost:7068/api/User/'+id).subscribe(
      (data:any) => {
        alert("user deleted successfully")
        this.ngOnInit();
      },
      (error)=>{
        alert("Error in deleting user");
      }
    );
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
