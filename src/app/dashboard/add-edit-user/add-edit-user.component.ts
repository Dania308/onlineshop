import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    NgIf
  ],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.css'
})
export class AddEditUserComponent implements OnChanges {
  @Input() user: any;

  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private userService: UserService) {
  }

  private cleanUp() {
    this.username = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }

  public onSave() {
    if (this.password != this.confirmPassword) {
      alert("Parolele nu se potrivesc");
      return;
    }

    let body = {
      id: "",
      email: this.email,
      password: this.password,
      username: this.username
    };

    if (this.user != null) {
      body.id = this.user.id;

      this.userService.updateUser(body);

      this.user = null;
    } else {
      this.userService.createUser(body);
    }
    this.cleanUp();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user == null) {
      this.cleanUp();
    } else {
      this.username = this.user.username;
      this.email = this.user.email;
      this.password = "";
      this.password = "";
    }
  }
}
