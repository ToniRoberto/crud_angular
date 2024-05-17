import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../piper/media.pipe";

@Component({
    selector: 'app-componenteprojeto12',
    standalone: true,
    templateUrl: './componenteprojeto12.component.html',
    styleUrl: './componenteprojeto12.component.css',
    imports: [CommonModule, MediaPipe]
})
export class Componenteprojeto12Component {
  //texto
  nome:string = 'Toni';
  //objto
  obj:any = {'nome':'Toni', 'idade':31};
  //vetor
  alunos:any = [
    {'nome':'Ana',     'nota1':8, 'nota2':9},
    {'nome':'Julio',   'nota1':7, 'nota2':8},
    {'nome':'Letícia', 'nota1':3, 'nota2':2},
    {'nome':'Ricardo', 'nota1':7, 'nota2':7}
  ];
}
