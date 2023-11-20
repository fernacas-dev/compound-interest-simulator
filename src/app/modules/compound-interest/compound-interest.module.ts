import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompountInterestTableComponent } from './components/compound-interest-table/compount-interest-table.component';
import { CardComponent } from './components/card/card.component';
import { CompoundInterestService } from './services/compound-interest.service';

@NgModule({
  declarations: [
    CompountInterestTableComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CompoundInterestService
  ],
  exports: [
    CompountInterestTableComponent,
    CardComponent
  ]
})
export class CompoundInterestModule { }
