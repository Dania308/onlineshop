import {Component} from '@angular/core';
import {AddEditItemComponent} from './add-edit-item/add-edit-item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ListItemsComponent} from '../list-items/list-items.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddEditItemComponent, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, ListItemsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showFilter: boolean = false;

  selectedItem: any;

  constructor() {
  }

  public onReceiveSelectedItem(item: any) {
    console.log("Metoda onReceiveSelectedItem() - dashboard")
    this.selectedItem = item;
  }
}
