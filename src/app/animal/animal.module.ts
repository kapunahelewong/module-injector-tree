import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from './animal.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [ AnimalService ]
})
export class AnimalModule { }
