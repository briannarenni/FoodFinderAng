import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Restaurant } from '../../models/Restaurant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  @Input() restaurants!: Restaurant[];
  @Input() currTableList!: Restaurant[];
  @Output() currTableListChange = new EventEmitter<Restaurant[]>();
  cuisines!: string[];
  cities!: string[];
  sortOptions!: string[];
  selectedCuisine!: string;
  selectedCity!: string;
  isDesc = false;
  selectedSortOption!: string;
  filterChanged = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.cuisines = ['American', 'Chinese', 'Greek', 'Italian', 'Mexican', 'Thai'];
    this.cities = ['Atlanta', 'Chicago', 'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York City', 'Orlando', 'Portland', 'Seattle', 'San Diego', 'San Francisco'];
    this.sortOptions = ['Name', 'Highest Rating', 'Lowest Rating'];
    this.selectedSortOption = this.sortOptions[0];
    this.filterChanged.subscribe(() => {
      this.selectedSortOption = 'Name';
    });
  }

  clearFilters() {
    this.selectedCuisine = '';
    this.selectedCity = '';
    this.selectedSortOption = 'Name';
    this.currTableList = [...this.restaurants];
    this.currTableListChange.emit(this.currTableList);
  }

  sortTable(sortOption: string) {
    this.selectedSortOption = sortOption;
    if (sortOption === 'Highest Rating') {
      this.currTableList.sort((a, b) => b.Rating - a.Rating);
    } else if (sortOption === 'Lowest Rating') {
      this.currTableList.sort((a, b) => a.Rating - b.Rating);
    } else if (sortOption === 'Name') {
      this.currTableList.sort((a, b) => {
        if (a.RestName < b.RestName) return -1;
        if (a.RestName > b.RestName) return 1;
        return 0;
      });
    }
    this.currTableListChange.emit(this.currTableList);
  }

  filterTable(type: 'cuisine' | 'city', value: string) {
    let filteredList = [...this.restaurants];
    if (type === 'cuisine') {
      if (this.selectedCuisine === value) {
        this.selectedCuisine = '';
      } else {
        this.selectedCuisine = value;
      }
    } else if (type === 'city') {
      if (this.selectedCity === value) {
        this.selectedCity = '';
      } else {
        this.selectedCity = value;
      }
    }
    if (this.selectedCuisine) {
      filteredList = filteredList.filter(restaurant => restaurant.Cuisine === this.selectedCuisine);
    }
    if (this.selectedCity) {
      filteredList = filteredList.filter(restaurant => restaurant.City === this.selectedCity);
    }
    this.currTableList = filteredList;
    this.sortTable(this.selectedSortOption);
  }



}
