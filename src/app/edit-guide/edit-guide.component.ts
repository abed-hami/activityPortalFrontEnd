import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-guide',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SidebarComponent,RouterModule, FormsModule],
  templateUrl: './edit-guide.component.html',
  styleUrl: './edit-guide.component.css'
})
export class EditGuideComponent {

  id:any;

 public guideById:any;


 constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router ){

 }

 ngOnInit(): void{

   this.id=this.route.snapshot.paramMap.get('id');
   console.log(this.id)
   this.getGuideId(this.id);
 }

public getGuideId(id:any){
       this.http.get('https://localhost:7068/api/Guide/'+id).subscribe(
         (data) => {
          this.guideById=data;
           console.log(data);



         }
       );

}

  editGuide(value:any){
    this.http.put('https://localhost:7068/api/Guide/'+this.id,value).subscribe((response)=>{
      alert("edit successful")
      this.navigateTo('/guides')
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
