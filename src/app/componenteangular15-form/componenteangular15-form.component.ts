import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componenteangular15-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componenteangular15-form.component.html',
  styleUrl: './componenteangular15-form.component.css'
})
export class Componenteangular15FormComponent {
  //variavel para armazenar nome
  nome:string = '';

  //output
  @Output () funcao = new EventEmitter<string>();

  //cadastro do componente
  cadastrarNome(){
    this.funcao.emit(this.nome);
  }
}
