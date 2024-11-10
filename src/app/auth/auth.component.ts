import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormsModule} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
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
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  viewType: string = "login";
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private authService: AuthService, private router: Router) {
  }

  public onLogin() {
    this.authService.login(this.email, this.password).subscribe((response: any) => {
      console.log(response);

      this.cleanUp();

      this.authService.setAuthenticate(true);

      // navigarea controlata pe pagini
      // ne folsim de path-ul din fisierul de app.routes.ts
      this.router.navigateByUrl('/admin');
    }, (error: any) => {
      console.log("Avem o eroare");
      console.log(error);
    });
  }

  public onRegister() {
    if (this.password === this.confirmPassword) {
      this.authService.register(this.email, this.password, this.username).subscribe((response: any) => {
        console.log(response);

        this.cleanUp();

        this.viewType = 'login';
      }, (error: any) => {
        console.log("Avem o eroare");
        console.log(error);
      });
    } else {
      alert("Parolele nu se potrivesc!");
    }
  }

  private cleanUp() {
    this.username = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }
}
