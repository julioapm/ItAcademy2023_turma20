import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-cadastro-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-reactive.component.html',
  styleUrl: './cadastro-reactive.component.css'
})
export class CadastroReactiveComponent {
  pessoa = new Pessoa('Anônima', 0);
  cadastro = new FormGroup({
    nome: new FormControl(this.pessoa.nome, [Validators.required, Validators.maxLength(60)]),
    idade: new FormControl(this.pessoa.idade, [Validators.required, Validators.min(0)]),
  });

  onSubmit() {
    console.log(this.cadastro.status);
    console.log(this.cadastro.value);
    this.pessoa.nome = this.cadastro.value.nome!;
    this.pessoa.idade = this.cadastro.value.idade!;
  }
}
