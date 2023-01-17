import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/MenuItem';
import { Restaurant } from '../../models/Restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  menuItems?: MenuItem[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  getMenu() {
    this.menuService.getCuisineMenu('american').subscribe(menuItems => {
    menuItems.forEach(item => console.log(item));
    });
  }

}
