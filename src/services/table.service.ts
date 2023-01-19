import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';


@Injectable({
  providedIn: 'root'
})

export class TableService {
  private _restaurants: Restaurant[] = [];
  private _currTableList: Restaurant[] = [];

  constructor() { }

  get restaurants() { return this._restaurants; }
  set restaurants(value: Restaurant[]) { this._restaurants = value; }

  get currTableList() { return this._currTableList; }
  set currTableList(value: Restaurant[]) { this._currTableList = value; }
}
