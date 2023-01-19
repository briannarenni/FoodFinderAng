import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/Restaurant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  cuisines!: String[];
  cities!: String[];
  sortOptions!: String[];

  constructor() { }

  ngOnInit() {
    this.cuisines = ['American', 'Chinese', 'Greek', 'Italian', 'Mexican', 'Thai'];
    this.cities = ['Atlanta', 'Chicago', 'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York City', 'Orlando', 'Portland', 'Seattle', 'San Diego', 'San Francisco'];
    this.sortOptions = ['Default', 'Highest Rating', 'Lowest Rating'];
  }

  static sortDefault() {}

  static sortHighest(table: Restaurant[]): Restaurant[] {

    return table;
  }

  static sortLowest(table: Restaurant[]): Restaurant[] {
    return table;
  }

  sortTable(list: Restaurant[]) {
    // if (table isn't sorted by desc rating)
    // this.currTableList = NavbarComponent.sortHighest(list);

    // else
    // this.currTableList = NavbarComponent.sortLowest(list)
  }

}
