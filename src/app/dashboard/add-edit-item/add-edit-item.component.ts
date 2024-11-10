import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
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
export class AddEditItemComponent implements OnChanges {
  @Input() item: any;
  title: string = '';
  description: string = '';
  price: number = 0;
  imageUrl: string = '';

  constructor(private itemService: ItemService) {
  }

  public onSave(): void {
    let body = {
      id: "",
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    };
    console.log(body);

    if (this.item != null) {
    //   inseamna ca facem update
      body.id = this.item.id;

      this.itemService.updateItem(body);

      // resetam variabila de item, pt insert
      this.item = null;
    } else {
      this.itemService.createItem(body);
    }

    this.cleanUp();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Metoda ngOnChanges() - add-edit-item")
    console.log(this.item);

    if (this.item == null) {
      this.cleanUp();
    } else {
      this.title = this.item.title
      this.description = this.item.description;
      this.price = this.item.price;
      this.imageUrl = this.item.imageUrl;
    }
  }

  private cleanUp() {
    this.title = "";
    this.description = "";
    this.price = 0;
    this.imageUrl = "";
  }
}
