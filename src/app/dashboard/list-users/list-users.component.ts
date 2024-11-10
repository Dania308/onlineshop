import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        NgForOf
    ],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  @Output() userChange: EventEmitter<any> = new EventEmitter();
  users: Array<any> = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe((users: Array<any>) => {
      this.users = users;
    })
  }

  public onUpdateUser(user: any) {
    this.userChange.emit(user);
  }

  public onDeleteUser(user: any) {
    this.userService.deleteUser(user.id);
  }
}
