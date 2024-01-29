import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AuthenticationService } from '../authentication.service';
import { FetchService } from '../fetch.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from "../footer/footer.component";


@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [NavbarComponent, RouterModule, HttpClientModule, CarouselModule, FooterComponent],
    
})
export class HomepageComponent {

  constructor(private http:HttpClient, private router:Router){

  }
  id:any=1
  ngOnInit(){
    this.getInfo(this.id)
    this.getGuides()
  }
  info:any
  guide:any

  getInfo(id:any){
    this.http.get('https://localhost:7068/api/WebsiteInformation/'+id).subscribe(
          (data) => {
           this.info=data;
            console.log(data);



          }
        );
  }

  getGuides(){
    this.http.get('https://localhost:7068/api/Guide').subscribe(
          (data) => {
           this.guide=data;
            console.log(data);



          }
        );
  }





}
