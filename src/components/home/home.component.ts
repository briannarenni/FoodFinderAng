import { Component, Input, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/Restaurant';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ViewMenuComponent } from '../view-menu/view-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  restaurants?: Restaurant[];

  constructor(private restService: RestaurantService,) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  open() {

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
