import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/MenuItem';


@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {
  menuItems?: MenuItem[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    // this.getRestMenu();

  }

  getRestMenu() {
    this.menuService.getCuisineMenu('american').subscribe(menuItems => this.menuItems = menuItems);
  }

}
