import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SumCalculatorComponent } from './app/sum-calculator/sum-calculator.component';
import { ProductListComponent } from './app/product-list/product-list.component';
import { VerbConjugatorComponent } from './app/verb-conjugator/verb-conjugator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SumCalculatorComponent, ProductListComponent, VerbConjugatorComponent],
  template: `
    <div>
      <h2>Sum Calculator</h2>
      <sum-calculator></sum-calculator>

      <h2>Product List</h2>
      <product-list></product-list>

      <h2>Verb Conjugator</h2>
      <verb-conjugator></verb-conjugator>
    </div>
  `
})
class App {
  name = 'Angular';
}

bootstrapApplication(App);