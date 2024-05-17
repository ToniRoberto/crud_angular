import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componenteprojeto11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componenteprojeto11.component.html',
  styleUrl: './componenteprojeto11.component.css'
})
export class Componenteprojeto11Component {
  //objeto de formulário
  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  //visibilidade botão
  btnCadastrar:boolean = true;

  //Vetor
  vetor:Pessoa[] = [];

  //Armazenar indice
  indice:number = -1;

  //Função Cadastro
  cadastrar(){
    //cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza input
    this.formulario.reset();

    //Visualização via console
    //console.table(this.vetor);
  }

  //Função Seleção
  selecionar(indice:number){
    //Atribuir indice pessoa
    this.indice = indice;

    //Atribuir dados da pessoa
    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade : this.vetor[indice].idade,
      cidade : this.vetor[indice].cidade
    });

    //Visibilidade botoa
    this.btnCadastrar = false;
  }

  //função alterar
  alterar(){
    //alterar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //limpar inputs
    this.formulario.reset();

    //visibilidade botão
    this.btnCadastrar = true;
  }

  //função remover
  remover(){
    //remover pessoa do vetor
    this.vetor.splice(this.indice, 1);

    //limpar inputs
    this.formulario.reset();

    //visibilidade botão
    this.btnCadastrar = true;
  }

  //funcção cancelar
  cancelar(){
    //limpeza inputs
    this.formulario.reset();

    //visibilidade
    this.btnCadastrar = true;
  }
}
