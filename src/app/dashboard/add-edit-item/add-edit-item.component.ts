import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-add-edit-item',
  standalone: true,
  imports: [MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './add-edit-item.component.html',
  styleUrl: './add-edit-item.component.css'
})
export class AddEditItemComponent {
  title: string = '';
  description: string = '';
  price: number = 0;
  imageUrl: string = '';

  constructor(private itemService: ItemService) {
  }

  public onSave():void {
    let item = {
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    };
    console.log(item);

    this.itemService.createItem(item);
  }
}
