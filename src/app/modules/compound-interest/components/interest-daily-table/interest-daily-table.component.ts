import { Component , Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-interest-daily-table',
  templateUrl: './interest-daily-table.component.html',
  styleUrl: './interest-daily-table.component.scss'
})
export class InterestDailyTableComponent implements OnInit {
  @Input() data: {[x:number]: {total: number, interest: number, interestAcc: number, interestMonthly: number}[]} = [];
  @Input() index: number = 0;

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.index);
  }

}
