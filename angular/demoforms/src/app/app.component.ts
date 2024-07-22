import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroReactiveComponent } from './cadastro-reactive/cadastro-reactive.component';
import { CadastroTemplateDrivenComponent } from "./cadastro-template-driven/cadastro-template-driven.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastroReactiveComponent, CadastroTemplateDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
