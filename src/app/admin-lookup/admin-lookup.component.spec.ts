import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLookupComponent } from './admin-lookup.component';

describe('AdminLookupComponent', () => {
  let component: AdminLookupComponent;
  let fixture: ComponentFixture<AdminLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLookupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
