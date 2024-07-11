function saudar() {
    console.log('Alô, Mundo!');
}

saudar();

function saudarComNome(nome: string) {
    console.log(`Alô, ${nome}!`);
}

saudarComNome('Júlio');

function criarSaudacao(nome: string) {
    return `Alô, ${nome}!`;
}

console.log(criarSaudacao('Júlio'));

function potencia(base: bigint, expoente = 0n) {
    let resultado = 1n;
    for(let cont = 0n; cont < expoente; cont++) {
        resultado = resultado * base;
    }
    return resultado;
}

console.log(potencia(2n,10n));
console.log(potencia(10n));

const saudarAnonima = function (nome: string) {
    return `Alô, ${nome}!`;
};

console.log(saudarAnonima);
console.log(saudarAnonima('Júlio'));

const saudarArrow = (nome: string) => `Alô, ${nome}!`;

console.log(saudarArrow('Júlio'));

/*
function multiplicar(fator: number) {
    return (numero: number) => numero * fator;
}
*/

function multiplicar(fator: number): (n: number) => number {
    return numero => numero * fator;
}

const dobrar = multiplicar(2);
const triplicar = multiplicar(3);

console.log(dobrar(2));
console.log(triplicar(5));

console.log(multiplicar(2)(5));
