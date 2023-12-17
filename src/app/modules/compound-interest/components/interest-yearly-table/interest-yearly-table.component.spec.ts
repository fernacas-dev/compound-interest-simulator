import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestYearlyTableComponent } from './interest-yearly-table.component';

describe('InterestYearlyTableComponent', () => {
  let component: InterestYearlyTableComponent;
  let fixture: ComponentFixture<InterestYearlyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestYearlyTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestYearlyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
