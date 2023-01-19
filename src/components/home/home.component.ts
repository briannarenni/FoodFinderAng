import { Component, Input, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/Restaurant';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Input() restInfo!: Restaurant;
  restaurants!: Restaurant[];
  currTableList!: Restaurant[];

  constructor(private restService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
    this.currTableList = this.restaurants;
  }

  getRestaurants() {
    this.restService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  resetResults() {
    this.currTableList = this.restaurants;
  }

  filterByCuisine(cuisine: string) {
    this.restService.filterByCuisine(cuisine).subscribe(restaurants => this.restaurants = restaurants);
  }

  filterByCity(city: string) {
    this.restService.filterByCity(city).subscribe(restaurants => this.restaurants = restaurants);
  }

}
