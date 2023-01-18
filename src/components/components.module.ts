import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [NavbarComponent, HomeComponent, ViewMenuComponent],
	exports: [NavbarComponent, HomeComponent, ViewMenuComponent]
})

export class ComponentsModule { }
