import { Component, inject, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  titulo = 'demoservices';
  usuariosService = inject(UsuariosService);
  usuarios: Usuario[] = [];

  ngOnInit() {
    this.usuarios = this.usuariosService.usuarios;
  }

}
