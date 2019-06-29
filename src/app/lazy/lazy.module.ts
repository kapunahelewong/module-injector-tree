import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { FlowerService } from '../flower.service';
import { AnimalModule } from '../animal/animal.module';




@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    AnimalModule
  ],
  declarations: [LazyComponent],
  providers: [FlowerService]
})
export class LazyModule { }
