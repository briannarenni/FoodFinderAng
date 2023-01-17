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
  }

  getMenu() {
    this.menuService.getCuisineMenu('american').subscribe(menuItems => this.menuItems = menuItems);
  }

  getRestaurants() {
    this.restService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  // ! tests
  // getMenu() {
  //   this.menuService.getCuisineMenu('american').subscribe(menuItems => {
  //   menuItems.forEach(item => console.log(item));
  //   });
  // }

  // getRestaurants() {
  //   this.restService.getRestaurants().subscribe(menuItems => {
  //     menuItems.forEach(item => console.log(item));
  //   });
  // }
}
