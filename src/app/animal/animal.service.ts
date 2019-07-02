import { Injectable } from '@angular/core';
import { AnimalModule } from './animal.module';

@Injectable({
  providedIn: AnimalModule
})
export class AnimalService {
  emoji = '🐶';
}
