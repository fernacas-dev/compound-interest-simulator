import { CompoundInterestService, YearlyData, InvestmentDataPoint } from './modules/compound-interest/services/compound-interest.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompoundInterestModule } from './modules/compound-interest/compound-interest.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CompoundInterestModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Compound Interest Simulator';
  calcForm: FormGroup;
  days = 365;
  viewMode: 'daily' | 'yearly' = 'yearly';
  interestTable: YearlyData[] = [];
  finalAmount = 0;
  totalInterest = 0;
  totalContributions = 0;
  isCalculated = false;
  hasError = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private readonly compoundInterestService: CompoundInterestService) {
    this.calcForm = this.fb.group({
      amount: new FormControl(1000, [Validators.required, Validators.min(1)]),
      interest: new FormControl(5, [Validators.required, Validators.min(0.01)]),
      years: new FormControl(5, [Validators.required, Validators.min(1), Validators.max(50)]),
      annualIncrease: new FormControl(1000, [Validators.required, Validators.min(0)]),
      viewMode: new FormControl('yearly', [Validators.required])
    });
  }

  ngOnInit(): void {
    // Calcular inicialmente para mostrar un ejemplo
    this.calculateResults();
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      this.calculateResults();
    } else {
      this.markFormGroupTouched(this.calcForm);
    }
  }

  calculateResults(): void {
    try {
      const amount = this.calcForm.value.amount;
      const interest = this.calcForm.value.interest;
      const years = this.calcForm.value.years;
      const annualIncrease = this.calcForm.value.annualIncrease;
      this.viewMode = this.calcForm.value.viewMode;

      // Generar la tabla de interés compuesto
      this.interestTable = this.compoundInterestService.generateCompountInterest(
        amount, interest, years, annualIncrease
      );

      // Calcular montos finales
      if (this.interestTable.length > 0) {
        const lastYear = this.interestTable[this.interestTable.length - 1];
        const yearNum = Number(Object.keys(lastYear)[0]);
        const lastDayData = lastYear[yearNum][lastYear[yearNum].length - 1];
        
        this.finalAmount = lastDayData.total;
        this.totalInterest = lastDayData.interestAcc;
        this.totalContributions = amount + (yearNum * annualIncrease);
      }

      this.isCalculated = true;
      this.hasError = false;
    } catch (error) {
      this.hasError = true;
      this.errorMessage = 'Error al calcular el interés compuesto. Por favor verifica los valores ingresados.';
      console.error('Error al calcular:', error);
    }
  }

  resetForm(): void {
    this.calcForm.reset({
      amount: 1000,
      interest: 5,
      years: 5,
      annualIncrease: 1000,
      viewMode: 'yearly'
    });
    this.calculateResults();
  }
  
  // Método para cambiar entre vistas anual y diaria
  setViewMode(mode: 'yearly' | 'daily'): void {
    this.viewMode = mode;
    this.calcForm.patchValue({ viewMode: mode });
  }

  // Método auxiliar para marcar todos los controles como tocados
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}
