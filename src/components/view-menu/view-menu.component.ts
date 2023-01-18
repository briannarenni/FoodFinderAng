import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/MenuItem';
import { Restaurant } from '../../models/Restaurant';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})

export class ViewMenuComponent implements OnInit {
  modalRef?: BsModalRef;
  // menuItems: MenuItem[];
  @Input() restInfo!: Restaurant;
  apps: MenuItem[];
  entrees: MenuItem[];

  constructor(private modalService: BsModalService, private menuService: MenuService) {
    // this.menuItems = [];
    this.apps = [];
    this.entrees = [];
  }

  ngOnInit(): void {
    this.getRestMenu();
  }


  openModal(template: TemplateRef<any>) {
    this.getRestMenu();
    this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
  }

  getRestMenu() {
    this.menuService.getCuisineMenu(this.restInfo.Cuisine).pipe(
      tap(menuItems => {
        this.apps = menuItems.filter(item => item.ItemGroup === 'appetizer');
        this.entrees = menuItems.filter(item => item.ItemGroup !== 'appetizer');
      })
    );
    return;
  }
}
