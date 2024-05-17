import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-componenteangular15-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componenteangular15-tabela.component.html',
  styleUrl: './componenteangular15-tabela.component.css'
})
export class Componenteangular15TabelaComponent {
  //pegar dados
  @Input() vetor:string[] = [];
}
