import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-guideslist',
    standalone: true,
    templateUrl: './guideslist.component.html',
    styleUrl: './guideslist.component.css',
    imports: [CommonModule, RouterModule, HttpClientModule, NavbarComponent, FooterComponent]
})
export class GuideslistComponent {

  constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router,private auth: AuthenticationService){

  }

  ngOnInit(){
    this.getGuides()
  }
guides:any
  getGuides(){
    this.http.get('https://localhost:7068/api/Guide').subscribe(
          (data) => {
           this.guides=data;
            console.log(data);



          }
        );
  }



}
