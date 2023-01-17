import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  cuisines!: ['american', 'chinese', 'greek', 'italian', 'mexican', 'thai'];

  constructor() { }

}
