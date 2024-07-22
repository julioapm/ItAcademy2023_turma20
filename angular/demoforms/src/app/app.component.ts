import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroReactiveComponent } from './cadastro-reactive/cadastro-reactive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastroReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
