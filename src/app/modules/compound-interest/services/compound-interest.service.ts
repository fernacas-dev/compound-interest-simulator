import { Injectable } from '@angular/core';

export interface InvestmentDataPoint {
  total: number;               // Monto total acumulado
  principal: number;           // Capital inicial + contribuciones
  interest: number;            // Interés ganado en este periodo
  interestAcc: number;         // Interés acumulado total
  interestMonthly: number;     // Interés mensual
  day?: number;                // Día (solo para vista diaria)
  year?: number;               // Año
}

export interface YearlyData {
  [year: number]: InvestmentDataPoint[];
}

@Injectable({
  providedIn: 'root'
})
export class CompoundInterestService {
  private readonly days = 365;

  /**
   * Genera una tabla de interés compuesto con capitalización diaria
   * @param amount Monto inicial
   * @param interestRate Tasa de interés anual (en decimal, ej: 0.1 para 10%)
   * @param years Número de años
   * @param annualContribution Contribución anual
   * @returns Tabla de interés compuesto con datos diarios y anuales
   */
  generateCompountInterest(amount: number, interestRate: number, years: number, annualContribution: number): YearlyData[] {
    const table: YearlyData[] = [];
    let interestAcc = 0;       // Interés acumulado total
    let amountAcc = amount;    // Monto acumulado (capital + interés)
    let principalAcc = amount; // Capital acumulado (sin interés)

    // Convertir la tasa de interés si se ingresa como porcentaje en vez de decimal
    const rate = interestRate > 1 ? interestRate / 100 : interestRate;
    const dailyRate = rate / this.days;

    for (let year = 1; year <= years; year++) {
      const yearlyData: InvestmentDataPoint[] = [];
      let yearlyInterest = 0;  // Interés ganado en el año actual

      for (let day = 1; day <= this.days; day++) {
        // Cálculo del interés diario (fórmula de interés compuesto)
        const dailyInterest = amountAcc * dailyRate;
        yearlyInterest += dailyInterest;
        interestAcc += dailyInterest;
        amountAcc += dailyInterest;

        // Guardar los datos diarios
        yearlyData.push({
          total: this.roundTo(amountAcc, 2),
          principal: this.roundTo(principalAcc, 2),
          interest: this.roundTo(yearlyInterest, 2),
          interestAcc: this.roundTo(interestAcc, 2),
          interestMonthly: this.roundTo(yearlyInterest / 12, 2),
          day,
          year
        });
      }

      // Añadir la contribución anual al final del año
      amountAcc += annualContribution;
      principalAcc += annualContribution;

      table.push({ [year]: yearlyData });
    }

    return table;
  }

  /**
   * Calcula el monto total al final del periodo (fórmula simplificada)
   * @param principal Monto inicial
   * @param rate Tasa de interés anual (decimal)
   * @param time Tiempo en años
   * @param contribution Contribución anual
   * @returns Monto final
   */
  calculateFinalAmount(principal: number, rate: number, time: number, contribution: number): number {
    // Convertir la tasa si se ingresa como porcentaje
    const r = rate > 1 ? rate / 100 : rate;
    
    // Fórmula para capital inicial con interés compuesto: P(1+r)^t
    const principalFinal = principal * Math.pow(1 + r, time);
    
    // Fórmula para contribuciones periódicas: PMT * (((1+r)^t - 1) / r)
    const contributionFinal = contribution * ((Math.pow(1 + r, time) - 1) / r);
    
    return this.roundTo(principalFinal + contributionFinal, 2);
  }

  /**
   * Redondea un número a un número específico de decimales
   */
  private roundTo(num: number, decimals: number = 2): number {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
  }
}
