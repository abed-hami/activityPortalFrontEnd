import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWebsiteComponent } from './admin-website.component';

describe('AdminWebsiteComponent', () => {
  let component: AdminWebsiteComponent;
  let fixture: ComponentFixture<AdminWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminWebsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
