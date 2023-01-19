import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
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
  isDesc = false;
  originalList!: Restaurant[];
  @Input() restaurants!: Restaurant[];
  @Input() currTableList!: Restaurant[];
  @Output() currTableListChange = new EventEmitter<Restaurant[]>();

  constructor(private restService: RestaurantService) { }

  ngOnInit() {
    this.cuisines = ['American', 'Chinese', 'Greek', 'Italian', 'Mexican', 'Thai'];
    this.cities = ['Atlanta', 'Chicago', 'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York City', 'Orlando', 'Portland', 'Seattle', 'San Diego', 'San Francisco'];
    this.sortOptions = ['Default', 'Highest Rating', 'Lowest Rating'];
  }

  sortTable() {
    this.isDesc = !this.isDesc;
    if (!this.isDesc) {
      this.currTableList = this.sortHighest(this.currTableList);
    } else {
      this.currTableList = this.sortLowest(this.currTableList);
    }
    this.currTableListChange.emit(this.currTableList);
  }

  sortHighest(table: Restaurant[]): Restaurant[] {
    return table.sort((a, b) => b.Rating - a.Rating);
  }

  sortLowest(table: Restaurant[]): Restaurant[] {
    return table.sort((a, b) => a.Rating - b.Rating);
  }

  filterByCuisine(cuisine: string) {
    this.restService.filterByCuisine(cuisine).subscribe(restaurants => this.currTableList = restaurants);
  }

  filterByCity(city: string) {
    this.restService.filterByCity(city).subscribe(restaurants => this.currTableList = restaurants);
  }

}
