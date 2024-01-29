import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignGuideComponent } from './assign-guide.component';

describe('AssignGuideComponent', () => {
  let component: AssignGuideComponent;
  let fixture: ComponentFixture<AssignGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
