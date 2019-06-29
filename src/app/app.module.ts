import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FlowerService } from './flower.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [ RouterModule ],
  providers: [FlowerService]
})
export class AppModule { }
