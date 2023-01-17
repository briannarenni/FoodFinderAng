import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { RestaurantService } from './restaurant.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [MenuService, RestaurantService],
})

export class ServicesModule { }
