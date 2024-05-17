import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  imagem:string = 'assets/imagem/dia.jpg';

  alterarImagem(){
    if(this.imagem === 'assets/imagem/dia.jpg'){
      this.imagem = 'assets/imagem/noite.jpg'
    }else{
      this.imagem = 'assets/imagem/dia.jpg';
    }
  }
  
}
