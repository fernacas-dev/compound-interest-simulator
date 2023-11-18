import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompountInterestTableComponent } from './components/compound-interest-table/compount-interest-table.component';
import { CompoundInterestService } from './services/compound-interest.service';

@NgModule({
  declarations: [
    CompountInterestTableComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CompoundInterestService
  ],
  exports: [
    CompountInterestTableComponent
  ]
})
export class CompoundInterestModule { }
