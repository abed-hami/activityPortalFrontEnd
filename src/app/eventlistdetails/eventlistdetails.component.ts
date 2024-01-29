import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'app-eventlistdetails',
    standalone: true,
    templateUrl: './eventlistdetails.component.html',
    styleUrl: './eventlistdetails.component.css',
    imports: [NavbarComponent,HttpClientModule,RouterModule]
})
export class EventlistdetailsComponent {
  id:any;

 public eventById:any;

 constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router,private auth: AuthenticationService){

 }
 members:any
 email=this.auth.getToken()

 ngOnInit(): void{

   this.id=this.route.snapshot.paramMap.get('id');
   this.getEventById(this.id);
   this.getAllMembers()

 }

public getEventById(id:any){
       this.http.get('https://localhost:7068/api/Events/'+id).subscribe(
         (data) => {
          this.eventById=data;
           console.log(data);



         }
       );

}
joined:any


navigateTo(route: string): void {
  if(this.auth.isLoggedIn()){
    this.router.navigate([route]);
  }
  else{
    this.router.navigate(["/login"]);
  }

}

reserve(){
  if(this.auth.isLoggedIn()){
    const data = { memberId: this.memberId, eventsId: this.eventById.id };
this.http.post('https://localhost:7068/api/MemberEvent', data).subscribe(
  (responseData) => {
    console.log(responseData);
    alert("joined event successfully!");
    this.navigateTo('/profile')
  },
  (error) => {
    console.log(error)
    alert("already joined!")
  }
);
  }
  else{
    this.navigateTo('/login')
  }


}
memberId:any





getAllMembers(){
  this.http.get('https://localhost:7068/api/Member/GetByUsername/'+this.email).subscribe(
    (data:any) => {


      this.members=data
      this.memberId=this.members.id





      console.log(this.members)


    }
  );

}


}
