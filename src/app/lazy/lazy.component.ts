import { Component, OnInit, Optional } from '@angular/core';
import { FlowerService } from '../flower.service';
import { AnimalService } from '../animal/animal.service';


@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent  {

  constructor(public flower: FlowerService, @Optional() public animal: AnimalService) { }

}

// , @Optional() public animal: AnimalService
// public flower: FlowerService, @Optional() public animal: AnimalService
