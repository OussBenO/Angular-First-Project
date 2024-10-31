import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sum-calculator',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <input type="number" [(ngModel)]="num1" placeholder="First number">
      <input type="number" [(ngModel)]="num2" placeholder="Second number">
      <p>{{ getSum() }}</p>
    </div>
  `
})
export class SumCalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;

  getSum(): string {
    if (this.num1 === null || this.num2 === null) {
      return 'Cannot calculate';
    }
    const sum = this.num1 + this.num2;
    return `The sum of ${this.num1} and ${this.num2} is ${sum}`;
  }
}