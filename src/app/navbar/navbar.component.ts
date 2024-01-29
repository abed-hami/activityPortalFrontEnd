import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private auth: AuthenticationService, private router: Router){

  }

  status="collapse"
  s="block"

  hide(){
    if(this.status=="collapse"){
      this.status = "show";
      this.s="none"
    }
    else{
      this.status="collapse"
      this.s="block"
    }
  }

  navigateTo(route: string): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate([route]);
    }
    else{
      this.router.navigate(["/login"]);
    }

  }

}
