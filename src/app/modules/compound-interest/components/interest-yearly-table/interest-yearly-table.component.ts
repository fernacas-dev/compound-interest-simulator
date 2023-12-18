import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest-yearly-table',
  templateUrl: './interest-yearly-table.component.html',
  styleUrl: './interest-yearly-table.component.scss'
})
export class InterestYearlyTableComponent {

  @Input() viewMode: 'daily' | 'yearly' = 'yearly';

  @Input() interestTable: {[x:number]: {total: number, interest: number, interestAcc: number, interestMonthly: number}[]}[]  = [];

}
