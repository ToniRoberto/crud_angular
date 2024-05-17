import { Component } from '@angular/core';
import { Componenteangular15FormComponent } from "../componenteangular15-form/componenteangular15-form.component";
import { Componenteangular15TabelaComponent } from "../componenteangular15-tabela/componenteangular15-tabela.component";

@Component({
    selector: 'app-componenteangular15',
    standalone: true,
    templateUrl: './componenteangular15.component.html',
    styleUrl: './componenteangular15.component.css',
    imports: [Componenteangular15FormComponent, Componenteangular15TabelaComponent]
})
export class Componenteangular15Component {
    //vetor
    nomes:string[] = ['Toni', 'Roberto', 'Silveira', 'Cardoso'];

    //função cadastrar
    cadastrar(nome:string){
        this.nomes.push(nome);
    }
}
