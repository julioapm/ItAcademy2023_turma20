import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-cadastro-template-driven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-template-driven.component.html',
  styleUrl: './cadastro-template-driven.component.css'
})
export class CadastroTemplateDrivenComponent {
  pessoa = new Pessoa('Anônima', 0);

  onSubmit() {
    console.log(this.pessoa);
  }
}
