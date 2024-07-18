import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alomundo',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './alomundo.component.html',
  styleUrl: './alomundo.component.css'
})
export class AlomundoComponent {
  mensagem = 'Alô, Mundo!';

  horaAtual() {
    return new Date();
  }

  onButtonClick() {
    alert('Alô!');
  }
}
