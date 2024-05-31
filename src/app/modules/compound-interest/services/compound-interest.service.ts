import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompoundInterestService {
  private readonly days = 365;
  generateCompountInterest(amount: number, interest: number, years: number, annualIncrease: number): { [x: number]: { total: number, interest: number, interestAcc: number, interestMonthly: number }[] }[] {
    const table = [];
    let amountTotal = amount;
    let interestAcc = 0;

    let dailyInterest = 0;
    let amountAcc = amount;

    for (let i = 1; i <= years; i++) {
      const tableByYears = [];
      for (let j = 0; j < this.days; j++) {
        dailyInterest = (amountAcc * interest) / this.days;
        interestAcc += dailyInterest;
        amountAcc += dailyInterest;
        tableByYears.push({ total: amountAcc, interest: interestAcc, interestAcc: interestAcc, interestMonthly: interestAcc / 12.0 });
      }

      amountAcc += annualIncrease;

      table.push({ [i]: tableByYears });
      amountTotal += annualIncrease;
    }
    return table;
  }
}
