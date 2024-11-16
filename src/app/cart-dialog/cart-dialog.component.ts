import { Component } from '@angular/core';
import {OrderService} from '../services/order.service';
import {MatCard, MatCardContent} from '@angular/material/card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf
  ],
  templateUrl: './cart-dialog.component.html',
  styleUrl: './cart-dialog.component.css'
})
export class CartDialogComponent {
  products: Array<any> = [];

  constructor(private orderService: OrderService) {
    this.orderService.getCart().subscribe((products: Array<any>) => {
      this.products = products;
    })
  }
}
