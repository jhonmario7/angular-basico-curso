import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroeModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

//Taller:
// Crear un modulo llamado contadorModule
//Hacer Declaraciones y exportaciones



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
