import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  cuisines!: ['american', 'chinese', 'greek', 'italian', 'mexican', 'thai'];
  cities!: ['Atlanta', 'Chicago', 'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York City', 'Orlando', 'Portland', 'Seattle', 'San Diego', 'San Francisco'];

  constructor() { }

}
