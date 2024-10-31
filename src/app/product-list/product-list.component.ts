import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div>
      <div>
        <input type="text" [(ngModel)]="newProduct" placeholder="Enter product">
        <button [disabled]="!newProduct" (click)="addProduct()">Add Product</button>
      </div>
      
      @if (products.length === 0) {
        <p>No product</p>
      } @else {
        <ul>
          @for (product of products; track product) {
            <li>{{ product }}</li>
          }
        </ul>
      }
    </div>
  `
})
export class ProductListComponent {
  products: string[] = [];
  newProduct: string = '';

  addProduct() {
    if (this.newProduct.trim()) {
      this.products.push(this.newProduct);
      this.newProduct = '';
    }
  }
}