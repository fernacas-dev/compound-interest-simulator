import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestChartComponent } from './interest-chart.component';

describe('InterestChartComponent', () => {
  let component: InterestChartComponent;
  let fixture: ComponentFixture<InterestChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
