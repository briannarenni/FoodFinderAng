import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { RestaurantService } from './restaurant.service';
import {TableService} from './table.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [MenuService, RestaurantService, TableService],
})

export class ServicesModule { }
