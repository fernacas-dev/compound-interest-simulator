import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompountInterestTableComponent } from './card.component';

describe('CompountInterestTableComponent', () => {
  let component: CompountInterestTableComponent;
  let fixture: ComponentFixture<CompountInterestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompountInterestTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompountInterestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
