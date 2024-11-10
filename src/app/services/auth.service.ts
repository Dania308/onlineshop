import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "https://api.codebyte-software.com:2323/api/users"
  private isAuth: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  public login(email: string, password: string) {
    let body = {
      email: email,
      password: password
    };

    return this.httpClient.post(`${this.apiUrl}/login`, body);
  }

  public register(email: string, password: string, username: string) {
    let body = {
      email: email,
      password: password,
      username: username
    };

    return this.httpClient.post(`${this.apiUrl}/register`, body);
  }

  public isAuthenticated() {
    return this.isAuth;
  }

  public setAuthenticate(isAuth: boolean) {
    this.isAuth = isAuth;
  }
}
