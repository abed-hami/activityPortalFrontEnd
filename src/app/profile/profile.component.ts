import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NavbarComponent,
    FormsModule,
  ],
})
export class ProfileComponent {
  type = 'password';
  t = true;
  class = 'fas fa-eye-slash';

  constructor(
    private http: HttpClient,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  show() {
    if (this.t) {
      this.type = 'text';
      this.t = false;
      this.class = 'fas fa-eye';
    } else {
      this.type = 'password';
      this.t = true;
      this.class = 'fas fa-eye-slash';
    }
  }

  hide() {
    this.type = 'password';
  }

  ngOnInit() {
    this.getAllMembers();
    this.getAllReserved();

    this.getJoinedEvent();
  }

  members: any;
  email = this.auth.getToken();
  date: any;
  id: any;
  getAllMembers() {
    this.http
      .get('https://localhost:7068/api/Member/GetByUsername/' + this.email)
      .subscribe((data: any) => {
        this.members = data;
        this.id = this.members.id;

        console.log(this.members);
      });
  }

  reservation: any;

  getAllReserved() {
    this.http
      .get('https://localhost:7068/api/MemberEvent')
      .subscribe((data: any) => {
        this.reservation = data;
      });
  }

  joined: any;
  public getJoinedEvent() {
    this.http
      .get('https://localhost:7068/api/MemberEvent/GetByEmail/' + this.email)
      .subscribe((data) => {
        this.joined = data;
        console.log(data);
      });
  }

  public DeleteJoinedEvent(id:any) {
    this.http
      .delete('https://localhost:7068/api/MemberEvent/' + id)
      .subscribe((data) => {
        alert("event unenrolled!")
        this.getJoinedEvent()
      },(error)=>{
        alert("Error when deleting event.")
        console.log(error)
      });
  }

  public memberById: any;

  logout() {
    this.auth.logout();
    this.navigateTo('/');
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  editMember(value: any) {
    this.http
      .put('https://localhost:7068/api/Member/' + this.id, value)
      .subscribe(
        (response) => {
          alert('edit successful');
        },
        (error) => {
          console.log(error);
          alert('Error in saving the data');
        }
      );
  }
}
