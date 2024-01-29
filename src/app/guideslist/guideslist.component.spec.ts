import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideslistComponent } from './guideslist.component';

describe('GuideslistComponent', () => {
  let component: GuideslistComponent;
  let fixture: ComponentFixture<GuideslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuideslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
