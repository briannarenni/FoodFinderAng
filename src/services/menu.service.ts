import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from '../models/MenuItem';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  apiUrl: string;
  cuisines?: ['american', 'chinese', 'greek', 'italian', 'mexican', 'thai'];
  restName?: string;
  restCuisine?: string;
  menuItems?: MenuItem[];

  constructor(private http: HttpClient) { this.apiUrl = 'http://localhost:5162/'; }

  public getCuisineMenu(cuisine: string): Observable<MenuItem[]> {
    const params = new HttpParams().set('cuisine', cuisine);
    return this.http.get<MenuItem[]>(`${ this.apiUrl }menus/cuisine`, { params })
      .pipe(
        map(response => response.map(menuItem => {
          const { ItemName, ItemPrice } = menuItem;
          return new MenuItem(ItemName, ItemPrice);
        }))
      );
  }

}

  // public getMenus(): Observable<MenuItem[]> {
  //   return this.http.get<MenuItem[]>(`${ this.apiUrl }menus/cuisine`)
  //     .pipe(
  //       map(response => response.map(menuItem => {
  //         const { ItemName, ItemPrice } = menuItem;
  //         return new MenuItem(ItemName, ItemPrice);
  //       }))
  //     );
  // }


