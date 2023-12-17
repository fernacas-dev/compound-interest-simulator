import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompountInterestTableComponent } from './components/compound-interest-table/compount-interest-table.component';
import { CardComponent } from './components/card/card.component';
import { CompoundInterestService } from './services/compound-interest.service';
import { InterestDailyTableComponent } from './components/interest-daily-table/interest-daily-table.component';
import { InterestYearlyTableComponent } from './components/interest-yearly-table/interest-yearly-table.component';
import { CollapsableTabComponent } from './components/collapsable-tab/collapsable-tab.component';

@NgModule({
  declarations: [
    CompountInterestTableComponent,
    CardComponent,
    InterestDailyTableComponent,
    InterestYearlyTableComponent,
    CollapsableTabComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CompoundInterestService
  ],
  exports: [
    CompountInterestTableComponent,
    CardComponent,
    CollapsableTabComponent
  ]
})
export class CompoundInterestModule { }
