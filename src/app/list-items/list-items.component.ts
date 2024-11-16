import {booleanAttribute, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {NgForOf, NgIf} from '@angular/common';
import {ItemService} from '../services/item.service';
import {MatButton} from '@angular/material/button';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    MatCardActions,
    MatButton,
    NgIf
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent implements OnInit {
  @Output() dataChange: EventEmitter<any> = new EventEmitter();
  @Input({transform: booleanAttribute}) isAdminPage: boolean = false;

  items: Array<any> = [];

  constructor(private itemService: ItemService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    // this.items.push('laptop');
    // this.items.push('monitor');
    // this.items.push('mouse');
    // am facut subscribe la modificarile aduse listei
    this.itemService.getItemsList().subscribe((items: Array<any>) => {
      this.items = items;
    })
  }

  public onDeleteItem(item: any) {
    this.itemService.deleteItem(item.id);
  }

  public onUpdateItem(item: any) {
    console.log("Metoda onUpdateItem() - list-items");
    this.dataChange.emit(item);
  }

  public onBuyItem(item: any) {
    console.log(item);
    this.orderService.addToCart(item);
  }
}
