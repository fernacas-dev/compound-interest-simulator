import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestDailyTableComponent } from './interest-daily-table.component';

describe('InterestDailyTableComponent', () => {
  let component: InterestDailyTableComponent;
  let fixture: ComponentFixture<InterestDailyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestDailyTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestDailyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
