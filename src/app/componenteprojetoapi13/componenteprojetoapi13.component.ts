import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produtos';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componenteprojetoapi13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componenteprojetoapi13.component.html',
  styleUrl: './componenteprojetoapi13.component.css'
})
export class Componenteprojetoapi13Component {
  //vetor
  vetor:Produto[] = [];

  //visibilidade botao
  btnCadastrar:boolean = true;

  //obj formulario
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  })

  //construtor
  constructor(private servico:ProdutoService){}

  //inicializao componento
  ngOnInit(){
    this.selecionar();
  }
  
  //metodo para selecionar todos os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  //metodo para cadastrar produtos
  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto).subscribe(retorno =>{
      this.vetor.push(retorno);
      this.formulario.reset();
    });
  }

  //metodo para selecionar produto especifico
  selecionarProduto(indice:number){
    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor

    });

    this.btnCadastrar = false;
  }

  //metodo para alterar produto especifico
  alterar(){
    this.servico.alterar(this.formulario.value as Produto).subscribe(retorno =>{
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });
      //alterar vetor
      this.vetor[indiceAlterado] = retorno;

      //limpar formulario
      this.formulario.reset();

      //visibilidade botao
      this.btnCadastrar = true;
    })
  }

  //metodo para remover produto especifico
  remover(){
    this.servico.remover(this.formulario.value.id).subscribe(() => {
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      });

      //remover vetor
      this.vetor.splice(indiceRemovido, 1);

      //limpar
      this.formulario.reset();

      //visibilidade
      this.btnCadastrar = true;
    })
  }
}
