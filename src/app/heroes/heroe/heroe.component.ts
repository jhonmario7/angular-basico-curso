import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = "Ironman";
    edad: number = 45

    //get no es un metodo, es un getter.
    get nombreCapitalizado(): string{
        //ponemos lo que va retornar:
        return this.nombre.toUpperCase();
    }

    // Creamos metodo para la función que retorne un string:

    obtenerNombre(): string {

    // Contruimos un string aqui adentro
        
        return `${ this.nombre } - ${ this.edad }`;
    }
    
    //Creamos Metodos para los Botones, no vamos a recibir 
    //ningun argumento ni tampoco voy a necesitar nada:
    
    cambiarNombre(): void {
        // Vamos a cambiar esta propiedad de la clase (Nombre)
        this.nombre = 'Spiderman';

    }
    

    cambiarEdad(): void{
        this.edad = 30;

    }

}
