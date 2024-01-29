import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AuthenticationService } from '../authentication.service';
import { FetchService } from '../fetch.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NavbarComponent, RouterModule, HttpClientModule,CarouselModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private http:HttpClient, private router:Router){

  }
  id:any=1
  ngOnInit(){
    this.getInfo(this.id)

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


}
