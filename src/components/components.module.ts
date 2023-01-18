import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ViewMenuComponent} from './view-menu/view-menu.component';


@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [HomeComponent, ViewMenuComponent],
	exports: [HomeComponent, ViewMenuComponent]
})

export class ComponentsModule { }
