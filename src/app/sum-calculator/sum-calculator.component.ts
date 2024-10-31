import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sum-calculator',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <input type="number" [(ngModel)]="num1" placeholder="Premier Nombre">
      <input type="number" [(ngModel)]="num2" placeholder="Deuxieme Nombre">
      <p>{{ getSum() }}</p>
    </div>
  `
})
export class SumCalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;

  getSum(): string {
    if (this.num1 === null || this.num2 === null) {
      return 'Impossible de claculer';
    }
    const sum = this.num1 + this.num2;
    return `La somme de  ${this.num1} et ${this.num2} égale ${sum}`;
  }
}