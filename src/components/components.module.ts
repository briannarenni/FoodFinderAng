import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../components/home/home.component';
import {NavBarComponent} from '../components/navbar/navbar.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [HomeComponent, NavBarComponent],
	exports: [HomeComponent, NavBarComponent]
})

export class ComponentsModule { }
