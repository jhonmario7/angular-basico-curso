import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.components';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeModule } from '../heroes/heroes.module';


@NgModule({
    declarations:[
        ContadorComponent,

    ],
    exports: [
        ContadorComponent        
    ]

})
export class ContadorModule{}