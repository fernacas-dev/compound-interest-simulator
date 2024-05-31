import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest-daily-table',
  templateUrl: './interest-daily-table.component.html',
  styles: [],
})
export class InterestDailyTableComponent {
  @Input() data: { [x: number]: { total: number, interest: number, interestAcc: number, interestMonthly: number }[] } = [];
  @Input() index: number = 0;
}
