import {Component} from '@angular/core';
import {AddEditItemComponent} from './add-edit-item/add-edit-item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ListItemsComponent} from '../list-items/list-items.component';
import {AddEditUserComponent} from './add-edit-user/add-edit-user.component';
import {ListUsersComponent} from './list-users/list-users.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddEditItemComponent, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, ListItemsComponent, AddEditUserComponent, ListUsersComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showFilter: boolean = false;

  selectedItem: any;
  selectedUser: any;

  constructor() {
  }

  public onReceiveSelectedItem(item: any) {
    console.log("Metoda onReceiveSelectedItem() - dashboard")
    this.selectedItem = item;
  }

  public onReceiveSelectedUser(user: any) {
    console.log("Metoda onReceiveSelectedUser() - dashboard")
    this.selectedUser = user;
  }
}
