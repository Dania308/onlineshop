import { Component } from '@angular/core';
import {AddEditItemComponent} from '../dashboard/add-edit-item/add-edit-item.component';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {ListItemsComponent} from '../list-items/list-items.component';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ListItemsComponent,
    MatCard,
    MatCardContent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showFilter: boolean = false;
}
