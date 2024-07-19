import { Injectable } from "@angular/core";
import { Usuario } from "./usuario.model";

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    #usuarios: Usuario[] = [
        {id:1, nome:'John Doe'},
        {id:2, nome:'Jane Doe', dataNascimento:new Date(2018,10,3)},
        {id:3, nome:'Mary Doe', dataNascimento:new Date(1980,1,15)},
    ];

    get usuarios() {
        return this.#usuarios;
    }

    buscarPorId(id:number) {
        return this.#usuarios.find(u => u.id === id);
    }

    adicionar(novo:Usuario) {
        this.#usuarios.push(novo);
    }
}