import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompoundInterestService {

  private days = 365

  generateCompountInterest(amount: number, interest: number, years: number, annualIncrease: number): {[x:number]: {total: number, interest: number, interestAcc: number, interestMonthly: number}[]}[] {
    const table = [];
    let amountTotal = amount;
    let interestTotal = 0;
    let interestAcc = 0;

    for(let i = 1; i <= years; i++){
      const tableByYears = [];
      for(let j = 0; j < this.days; j++){
        interestAcc += (amountTotal*interest)/this.days;
        interestTotal = (amountTotal*interest) + amountTotal;
        amountTotal = ((amountTotal*interest) / this.days) + amountTotal;
        interestTotal -= amountTotal;
        tableByYears.push({total: amountTotal, interest: interestTotal, interestAcc: interestAcc, interestMonthly: interestTotal/12.0});
      }

      table.push({[i]: tableByYears});
      amountTotal += annualIncrease;
    }

    table.forEach(d => console.log(d));
    return table;
  }
}
