import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { FetchService } from '../fetch.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    selector: 'app-admin-website',
    standalone: true,
    templateUrl: './admin-website.component.html',
    styleUrl: './admin-website.component.css',
    imports: [SidebarComponent,FormsModule,HttpClientModule,RouterModule]
})
export class AdminWebsiteComponent {

  id:any=1;

  public info:any;


  constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router ){

  }

  ngOnInit(): void{


    console.log(this.id)
    this.getInfo(this.id);
  }

 public getInfo(id:any){
        this.http.get('https://localhost:7068/api/WebsiteInformation/'+id).subscribe(
          (data) => {
           this.info=data;
            console.log(data);



          }
        );

 }

   editInfo(value:any){
     this.http.put('https://localhost:7068/api/WebsiteInformation/'+this.id,value).subscribe((response)=>{
       alert("edit successful")

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
