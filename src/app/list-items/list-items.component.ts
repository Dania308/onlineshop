import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {ItemService} from '../services/item.service';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    MatCardActions,
    MatButton
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent implements OnInit {
  items: Array<any> = [];

  constructor(private itemService: ItemService) {
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
}
