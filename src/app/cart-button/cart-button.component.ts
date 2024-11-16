import { Component } from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {CartDialogComponent} from '../cart-dialog/cart-dialog.component';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon
  ],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.css'
})
export class CartButtonComponent {
  productsCount: number = 0;

  constructor(private dialog: MatDialog, private orderService: OrderService) {
    this.orderService.getCart().subscribe((products: Array<any>) => {
      this.productsCount = products.length;
    })
  }

  public openCartDialog() {
    this.dialog.open(CartDialogComponent);
  }
}
