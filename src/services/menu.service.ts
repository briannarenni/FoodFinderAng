import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from '../models/MenuItem';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  localUrl!: 'http://localhost:5162';
  cuisines?: ['american', 'chinese', 'greek', 'italian', 'mexican', 'thai'];
  restCuisine?: string;
  menuItems?: MenuItem[];
  apiUrl: string;

  constructor(private http: HttpClient) { this.apiUrl = 'https://foodfindernetapi.azurewebsites.net'; }

  public getCuisineMenu(cuisine: string): Observable<MenuItem[]> {
    const params = new HttpParams().set('cuisine', cuisine);
    return this.http.get<MenuItem[]>(`${ this.apiUrl }/menus/cuisine`, { params })
      .pipe(
        map(response => response.map(menuItem => {
          const { ItemName, ItemPrice, ItemGroup } = menuItem;
          return new MenuItem(ItemName, ItemPrice, ItemGroup);
        }))
      );
  }

}



