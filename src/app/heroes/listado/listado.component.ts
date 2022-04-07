import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {


  //Vamos hacer un arreglo de Strings y lo definimos de está manera: (Heroes, es un arreglo, de string)
  heroes: string[] = ['Angular', 'DjGango', 'Nodejs', 'React', 'Spring'];
  heroeBorrado: string ='';

  //Creamos una propiedad, donde podamos mostrarla en el HTML para borrar:
  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift();
    
  } 

}
