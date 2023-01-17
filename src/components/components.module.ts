import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {MenuPageComponent} from './menu-page/menu-page.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [HomeComponent, MenuPageComponent],
	exports: [HomeComponent, MenuPageComponent]
})

export class ComponentsModule { }
