import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineventlistComponent } from './admineventlist.component';

describe('AdmineventlistComponent', () => {
  let component: AdmineventlistComponent;
  let fixture: ComponentFixture<AdmineventlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineventlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineventlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
