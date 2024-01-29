import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlistdetailsComponent } from './eventlistdetails.component';

describe('EventlistdetailsComponent', () => {
  let component: EventlistdetailsComponent;
  let fixture: ComponentFixture<EventlistdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventlistdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventlistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
