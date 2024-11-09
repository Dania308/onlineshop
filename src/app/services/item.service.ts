import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl: string = 'https://api.codebyte-software.com:2323/api';
  // canal de youtube
  private itemObservable = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {
    this.readItems();
  }

  public createItem(item: any) {
    let body = {
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    };

    this.httpClient.post(`${this.apiUrl}/items`,body).subscribe((response: any)=> {
      console.log(response);

      this.readItems();
    })
  }

  public deleteItem(id: any) {
    this.httpClient.delete(`${this.apiUrl}/items/${id}`).subscribe((response: any) => {
      console.log(response);

      this.readItems();
    })
  }

  private readItems() {
    this.httpClient.get(`${this.apiUrl}/items`).subscribe((response: any) => {
      console.log(response);
      // metoda next() preia toate item-urile din response si le trimite abonatilor
      this.itemObservable.next(response.data);
    })
  }

  public getItemsList() {
    return this.itemObservable.asObservable();
  }
}
