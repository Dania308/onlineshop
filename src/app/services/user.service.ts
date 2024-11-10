import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'https://api.codebyte-software.com:2323/api';
  // canal de youtube
  private userObservable = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {
    this.readUsers();
  }

  public createUser(user: any) {
    let body = {
      email: user.email,
      password: user.password,
      username: user.username
    };

    this.httpClient.post(`${this.apiUrl}/users`,body).subscribe((response: any)=> {
      console.log(response);

      this.readUsers();
    })
  }

  public deleteUser(id: any) {
    this.httpClient.delete(`${this.apiUrl}/users/${id}`).subscribe((response: any) => {
      console.log(response);

      this.readUsers();
    })
  }

  private readUsers() {
    this.httpClient.get(`${this.apiUrl}/users`).subscribe((response: any) => {
      console.log(response);
      // metoda next() preia toate item-urile din response si le trimite abonatilor
      this.userObservable.next(response.data);
    })
  }

  public getUsersList() {
    return this.userObservable.asObservable();
  }

  public updateUser(user: any) {
    let body = {
      id: user.id,
      email: user.email,
      password: user.password,
      username: user.username
    };

    this.httpClient.put(`${this.apiUrl}/users`, body).subscribe((response: any) => {
      console.log(response);

      this.readUsers();
    })
  }
}
