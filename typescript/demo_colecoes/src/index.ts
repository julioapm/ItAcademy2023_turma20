const mapa = new Map<string,string>();
mapa.set('RS','Rio Grande do Sul');
mapa.set('SC','Santa Catarina');
mapa.set('PR','Paraná');
console.log(mapa.get('RS'));
for (const e of mapa) {
    console.log(e);
}
for (const chave of mapa.keys()) {
    console.log(chave);
}
for (const valor of mapa.values()) {
    console.log(valor);
}

const conjunto = new Set<number>();
conjunto.add(1);
conjunto.add(2);
conjunto.add(1);
console.log(conjunto.size);
const array = [...conjunto];


const conjuntomisto = new Set<number|string>();
conjuntomisto.add(1);
conjuntomisto.add('teste');
conjuntomisto.forEach(e => console.log(e));
