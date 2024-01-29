import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-member',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SidebarComponent,RouterModule, FormsModule],
  templateUrl: './edit-member.component.html',
  styleUrl: './edit-member.component.css'
})
export class EditMemberComponent {


  id:any;

 public memberById:any;


 constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router ){

 }

 ngOnInit(): void{

   this.id=this.route.snapshot.paramMap.get('id');
   console.log(this.id)
   this.getMemberId(this.id);
 }

public getMemberId(id:any){
       this.http.get('https://localhost:7068/api/Member/'+id).subscribe(
         (data) => {
          this.memberById=data;
           console.log(data);



         }
       );

}

  editMember(value:any){
    this.http.put('https://localhost:7068/api/Member/'+this.id,value).subscribe((response)=>{
      alert("edit successful")
      this.navigateTo('/members')
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
