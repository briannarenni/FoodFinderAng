import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() restaurants!: Restaurant[];
  @Input() currTableList!: Restaurant[];
  @Output() currTableListChange = new EventEmitter<Restaurant[]>();

  constructor(private restService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
      this.currTableList = restaurants;
    });
  }

  resetResults() {
    location.reload();
  }

}
