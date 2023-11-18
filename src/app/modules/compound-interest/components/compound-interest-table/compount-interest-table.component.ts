import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compount-interest-table',
  templateUrl: './compount-interest-table.component.html',
  styleUrl: './compount-interest-table.component.scss'
})
export class CompountInterestTableComponent {
  @Input() interestTable: {[x:number]: {total: number, interest: number, interestAcc: number, interestMonthly: number}[]}[]  = [];
  @Input() viewMode: 'daily' | 'yearly' = 'yearly';
}
