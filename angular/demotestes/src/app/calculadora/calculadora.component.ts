import { Component } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  valor1 = 0;
  valor2 = 0;
  resultado = 0;

  constructor (private service: CalculadoraService) { }

  onSomarButtonClick() {
    this.resultado = this.service.somar(this.valor1, this.valor2);
  }
}
