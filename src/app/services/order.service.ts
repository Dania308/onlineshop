import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // @ts-ignore
  private cartObservable: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  constructor() { }

  public addToCart(item: any) {
    let products: Array<any> = this.cartObservable.getValue();

    products.push(item);

    this.cartObservable.next(products);
  }

  public removeFromCart(item: any) {
    let products: Array<any> = this.cartObservable.getValue();

    products = products.filter((product) => product.id != item.id);

    this.cartObservable.next(products);
  }

  public getCart() {
    return this.cartObservable.asObservable();
  }
}
