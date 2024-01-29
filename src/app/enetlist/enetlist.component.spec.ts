import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnetlistComponent } from './enetlist.component';

describe('EnetlistComponent', () => {
  let component: EnetlistComponent;
  let fixture: ComponentFixture<EnetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnetlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
