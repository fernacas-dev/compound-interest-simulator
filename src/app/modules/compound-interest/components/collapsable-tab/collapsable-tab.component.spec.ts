import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableTabComponent } from './collapsable-tab.component';

describe('CollapsableTabComponent', () => {
  let component: CollapsableTabComponent;
  let fixture: ComponentFixture<CollapsableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsableTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapsableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
