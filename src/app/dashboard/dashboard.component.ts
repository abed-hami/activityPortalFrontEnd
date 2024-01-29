import { AfterViewInit, Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { EnetlistComponent } from "../enetlist/enetlist.component";
import { AdmineventlistComponent } from '../admineventlist/admineventlist.component';
import { ChartModule } from 'primeng/chart';
import { flatMap } from 'rxjs';
import { FetchService } from '../fetch.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { callback } from 'chart.js/dist/helpers/helpers.core';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, SidebarComponent, EnetlistComponent, AdmineventlistComponent,ChartModule,HttpClientModule]
})
export class DashboardComponent  {


  sidebarOpen: boolean = false;
  eventsCount:any
  membersCount:any
  guidesCount:any
  usersCount:any



  chartData:any
  chartOptions:any

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  constructor( private http:HttpClient){




  }

  eventCount(){
    this.http.get('https://localhost:7068/api/Events').subscribe(
      (data:any) => {

          this.eventsCount=data.length
          this.chartData.datasets[0].data[2] = this.eventsCount // Assign the value to the data array
          console.log(this.eventsCount)
          this.updateData()


      }
    );
  }

  userCount(){
    this.http.get('https://localhost:7068/api/User').subscribe(
      (data:any) => {

          this.usersCount=data.length
          this.chartData.datasets[0].data[0] = this.usersCount // Assign the value to the data array
          console.log(this.usersCount)
          this.updateData()


      }
    );
  }

  MemberCount(){
    this.http.get('https://localhost:7068/api/Member').subscribe(
      (data:any) => {

        this.membersCount=data.length
        this.chartData.datasets[0].data[1] = this.membersCount // Assign the value to the data array
        console.log(this.membersCount)
        this.updateData()

      }
    );

  }

  guideCount(){
    this.http.get('https://localhost:7068/api/Guide').subscribe(
      (data:any) => {

        this.guidesCount=data.length
        this.chartData.datasets[0].data[3] = this.guidesCount
        console.log(this.guidesCount)
        this.updateData()

      }
    );

  }

  updateData(){

    this.chartData = {
      labels: ['Users', 'Members', 'Events', 'Guides'],

      datasets: [
        {
          label:"Dashboard Stats",
          data: [this.usersCount,this.membersCount,this.eventsCount,this.guidesCount],
          backgroundColor: ['orange', 'blue','green','yellow'],

        },


      ],
    };



    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        y: {
           beginAtZero: true,
        },
     },
     plugins: {
        legend: {
           display: true,
        },

     },

    };


  }




  ngOnInit(){

    this.MemberCount()
    this.eventCount()
    this.userCount()
    this.guideCount()
    this.updateData()







  }


  }



