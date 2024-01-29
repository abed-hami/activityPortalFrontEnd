import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assign-guide',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule,RouterModule],
  templateUrl: './assign-guide.component.html',
  styleUrl: './assign-guide.component.css'
})
export class AssignGuideComponent {

  constructor( private http:HttpClient, private router:ActivatedRoute, private route:Router){

  }
id:any
  ngOnInit(){
    this.getAllGuides()
    this.id=this.router.snapshot.paramMap.get('id');
    this.getEvent(this.id)
  }
  event:any
  getEvent(id:any){
    this.http.get('https://localhost:7068/api/Events/'+id).subscribe(
      (data:any) => {

        this.event=data

        console.log(this.event)

      }
    );

  }



  guides:any


  getAllGuides(){
    this.http.get('https://localhost:7068/api/Guide').subscribe(
      (data:any) => {

        this.guides=data

        console.log(this.guides)

      }
    );

  }



  assign(){
    const guideId = document.getElementById('GuideId') as HTMLInputElement

      const data = { guideId: guideId.value , eventId: this.id };

  this.http.post('https://localhost:7068/api/GuideEvent', data).subscribe(
    (responseData) => {
      console.log(responseData);
      alert("joined event successfully!");
      this.navigateTo('/adminEvents')
    },
    (error) => {
      console.log(error)
      alert("guide already assigned!")
    }
  );






  }

  navigateTo(route: string): void {
    this.route.navigate([route]);
  }



}
