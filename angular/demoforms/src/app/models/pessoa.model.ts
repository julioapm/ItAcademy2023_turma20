export class Pessoa {
    #nome: string
    #idade: number

    constructor(umNome: string, umaIdade: number) {
        this.#nome = umNome;
        this.#idade = umaIdade;
    }

    get nome() {
        return this.#nome;
    }

    set nome(umNome: string) {
        this.#nome = umNome;
    }

    get idade() {
        return this.#idade;
    }

    set idade(umaIdade: number) {
        this.#idade = umaIdade;
    }
}