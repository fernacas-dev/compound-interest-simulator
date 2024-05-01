import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompountInterestTableComponent } from './components/compound-interest-table/compount-interest-table.component';
import { CardComponent } from './components/card/card.component';
import { CompoundInterestService } from './services/compound-interest.service';
import { InterestDailyTableComponent } from './components/interest-daily-table/interest-daily-table.component';
import { InterestYearlyTableComponent } from './components/interest-yearly-table/interest-yearly-table.component';
import { CollapsableTabComponent } from './components/collapsable-tab/collapsable-tab.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { InterestChartComponent } from './components/interest-chart/interest-chart.component';

@NgModule({
  declarations: [
    CompountInterestTableComponent,
    CardComponent,
    InterestDailyTableComponent,
    InterestYearlyTableComponent,
    CollapsableTabComponent,
    InterestChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  providers: [
    CompoundInterestService,
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },

  ],
  exports: [
    CompountInterestTableComponent,
    CardComponent,
    CollapsableTabComponent
  ]
})
export class CompoundInterestModule { }
