import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {Restaurant} from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  cuisines!: ['american', 'chinese', 'greek', 'italian', 'mexican', 'thai'];
  cities!: ['Atlanta', 'Chicago', 'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York City', 'Orlando', 'Portland', 'Seattle', 'San Diego', 'San Francisco'];
  apiUrl: string;
  restName?: string;
  restCuisine?: string;
  restaurants?: Restaurant[];

  constructor(private http: HttpClient) { this.apiUrl = 'http://localhost:5162/'; }

}
