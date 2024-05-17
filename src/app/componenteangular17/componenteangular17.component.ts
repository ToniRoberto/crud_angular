import { Component } from '@angular/core';

@Component({
  selector: 'app-componenteangular17',
  standalone: true,
  imports: [],
  templateUrl: './componenteangular17.component.html',
  styleUrl: './componenteangular17.component.css'
})
export class Componenteangular17Component {
  //varial nome
  nome:string = 'Toni';

  //variavel media
  media:number = 0;

  //funcao calcular
  calculo(n1:number, n2:number){
    return(n1+n2)/2;
  }
}
