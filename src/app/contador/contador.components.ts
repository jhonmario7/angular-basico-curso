import { Component } from "@angular/core"; 


@Component({

    selector: 'app-contador',
    template: `

        <h1> {{ titulo }}</h1>
        <h1>La base es: <strong>{{ base }}</strong></h1>

        <button (click)="acumular(base)"> + {{base}} </button> 


        <span> {{ numero }} </span>

        <button (click)="acumular(-base)"> - {{base}} </button>

`
    
})
export class ContadorComponent {  
    
    //Coloco la palabra EXPORT porque pretendo usarla en otros lugares fuera de este archivo.

    titulo: string = 'CONTADOR APP';
    numero: number = 10;
    base  : number = 5;
  
    acumular( valor: number ){
      this.numero += valor;
    }
}