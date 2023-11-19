import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() interestTable: {[x:number]: {total: number, interest: number, interestAcc: number, interestMonthly: number}[]}[]  = [];
  @Input() viewMode: 'daily' | 'yearly' = 'yearly';
}
