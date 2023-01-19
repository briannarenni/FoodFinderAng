import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/Restaurant';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  cuisines!: string[];
  cities!: string[];
  sortOptions!: string[];
  selectedCuisine!: string;
  selectedCity!: string;
  isDesc = false;
  originalList!: Restaurant[];
  @Input() restaurants!: Restaurant[];
  @Input() currTableList!: Restaurant[];
  @Output() currTableListChange = new EventEmitter<Restaurant[]>();

  constructor(private restService: RestaurantService, private tableService: TableService) { }

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

  filterTable(type: 'cuisine' | 'city', value: string) {
    if (type === 'cuisine') {
      if (this.selectedCuisine === value) {
        this.selectedCuisine = '';
        this.currTableList = [...this.restaurants];
      } else {
        this.selectedCuisine = value;
        this.currTableList = [...this.restaurants].filter(restaurant => restaurant.Cuisine === value);
      }
    } else if (type === 'city') {
      if (this.selectedCity === value) {
        this.selectedCity = '';
        this.currTableList = [...this.restaurants];
      } else {
        this.selectedCity = value;
        this.currTableList = [...this.restaurants].filter(restaurant => restaurant.City === value);
      }
    }
    this.currTableListChange.emit(this.currTableList);
  }

}
