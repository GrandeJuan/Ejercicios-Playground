let suma = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;
let division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(2,2,suma));
console.log(calculadora(2,2,resta));
console.log(calculadora(2,2,multiplicacion));
console.log(calculadora(2,2,division));