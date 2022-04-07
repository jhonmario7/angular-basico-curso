import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//Utilizamos este decorador

@NgModule ({
    // Declaraciones es un arreglo: (Que cosas contiene este modulo, typs, componentes, en pocas palabras van a ser mis componenetes listado y heroes.)
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})


export class HeroeModule {}