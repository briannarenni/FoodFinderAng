import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { RestaurantService } from '../../services/restaurant.service';
import { MenuItem } from '../../models/MenuItem';
import { Restaurant } from '../../models/Restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  menuItems?: MenuItem[];
  restaurants?: Restaurant[];

  constructor(private menuService: MenuService, private restService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
    this.getMenu();
  }

  getRestaurants() {
    this.restService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  getMenu() {
    this.menuService.getCuisineMenu('american').subscribe(menuItems => this.menuItems = menuItems);
  }

  filterByCuisine(cuisine: string) {
    this.restService.filterByCuisine(cuisine).subscribe(restaurants => this.restaurants = restaurants);
  }

  filterByCity(city: string) {
    this.restService.filterByCity(city).subscribe(restaurants => this.restaurants = restaurants);
  }

  sortByHighestRating() {
    this.restService.sortByHighestRating().subscribe(restaurants => this.restaurants = restaurants);
  }

  sortByLowestRating() {
    this.restService.sortByLowestRating().subscribe(restaurants => this.restaurants = restaurants);
  }

}
