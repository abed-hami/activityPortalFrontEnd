import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarVisible: boolean=false;

  constructor(private router: Router, private auth: AuthenticationService ){

  }

  username:any=this.auth.getToken()

  open(){
    this.isOpen = !this.isOpen;
  }

  @Input() isOpen: boolean = false;

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }


  logout(){
    this.auth.logout();
    this.navigateTo("/")
  }
}
