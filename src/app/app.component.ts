import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";
import { Componente02Component } from "./componente02/componente02.component";
import { Componente03Component } from "./componente03/componente03.component";
import { Componente04Component } from "./componente04/componente04.component";
import { Componente05Component } from "./componente05/componente05.component";
import { Componente06Component } from "./componente06/componente06.component";
import { Componente07Component } from "./componente07/componente07.component";
import { Componente08Component } from "./componente08/componente08.component";
import { Componente09Component } from "./componente09/componente09.component";
import { Componente10Component } from "./componente10/componente10.component";
import { Componenteprojeto11Component } from "./componenteprojeto11/componenteprojeto11.component";
import { Componenteprojeto12Component } from "./componenteprojeto12/componenteprojeto12.component";
import { Componenteprojetoapi13Component } from "./componenteprojetoapi13/componenteprojetoapi13.component";
import { Componenteangular14Component } from "./componenteangular14/componenteangular14.component";
import { Componenteangular15Component } from "./componenteangular15/componenteangular15.component";
import { Componenteangular16Component } from "./componenteangular16/componenteangular16.component";
import { Componenteangular17Component } from "./componenteangular17/componenteangular17.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Componente01Component, Componente02Component, Componente03Component, Componente04Component, Componente05Component, Componente06Component, Componente07Component, Componente08Component, Componente09Component, Componente10Component, Componenteprojeto11Component, Componenteprojeto12Component, Componenteprojetoapi13Component, Componenteangular14Component, Componenteangular15Component, Componenteangular16Component, Componenteangular17Component]
})
export class AppComponent {
  title = 'primeiro-Projeto';
}
