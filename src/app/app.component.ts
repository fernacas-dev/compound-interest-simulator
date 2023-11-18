import { CompoundInterestService } from './modules/compound-interest/services/compound-interest.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompoundInterestModule } from './modules/compound-interest/compound-interest.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, CompoundInterestModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'compound-interest-calculator';

  calcForm: FormGroup;

  days = 365;
  viewMode: 'daily' | 'yearly' = 'yearly';
  interestTable: {[x:number]: {total: number, interest: number, interestAcc: number, interestMonthly: number}[]}[] = [];

  constructor(private fb: FormBuilder, private readonly compoundInterest: CompoundInterestService) {
    this.calcForm = this.fb.group({
      amount: new FormControl(1000, [Validators.required]),
      interest: new FormControl(0.1, [Validators.required]),
      years: new FormControl(1, [Validators.required]),
      annualIncrease: new FormControl(1000, [Validators.required]),
      viewMode: new FormControl('yearly', [Validators.required])
    });
  }

  onSubmit(form: FormGroup) {
    this.interestTable = this.compoundInterest.generateCompountInterest(form.value.amount, form.value.interest, form.value.years, form.value.annualIncrease);
    this.viewMode = form.value.viewMode;
  }
}
