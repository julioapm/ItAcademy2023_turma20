import { area, circunferencia as circ } from './circulo_funcoes';
import Circ from './circulo_objeto';

console.log(area(3.75));
console.log(circ(4));

const c1 = new Circ(10.5);
console.log(c1.area());
