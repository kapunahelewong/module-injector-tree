import { Component, Optional } from '@angular/core';
import { FlowerService } from './flower.service';
import { AnimalService } from './animal/animal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public flower: FlowerService, @Optional() public animal: AnimalService) {}
}
