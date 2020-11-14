import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms'

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';


@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModuleAngular,
    ReactiveFormsModule
  ],
  exports: [HeroComponent]
})
export class HeroModule { }
