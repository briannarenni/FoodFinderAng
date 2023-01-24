import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  localUrl!: 'http://localhost:5162';
  restName?: string;
  restCuisine?: string;
  restaurants?: Restaurant[];
  apiUrl: string;

  constructor(private http: HttpClient) { this.apiUrl = 'https://foodfindernetapi.azurewebsites.net'; }

  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${ this.apiUrl }/restaurants`)
      .pipe(
        map(response => response.map(restaurant => {
          return new Restaurant(restaurant.RestName, restaurant.Cuisine, restaurant.City, restaurant.Grade, restaurant.Rating);
        }))
      );
  }

  public filterByCuisine(cuisine: string): Observable<Restaurant[]> {
    const params = new HttpParams().set('cuisine', cuisine);
    return this.http.get<Restaurant[]>(`${ this.apiUrl }/restaurants/cuisine`, { params })
      .pipe(
        map(response => response.map(restaurant => {
          return new Restaurant(restaurant.RestName, restaurant.Cuisine, restaurant.City, restaurant.Grade, restaurant.Rating);
        }))
      );
  }

  public filterByCity(city: string): Observable<Restaurant[]> {
    const params = new HttpParams().set('city', city);
    return this.http.get<Restaurant[]>(`${ this.apiUrl }/restaurants/city`, { params })
      .pipe(
        map(response => response.map(restaurant => {
          return new Restaurant(restaurant.RestName, restaurant.Cuisine, restaurant.City, restaurant.Grade, restaurant.Rating);
        }))
      );
  }

}

