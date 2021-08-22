let doble = (numero1) => numero1 * 2;
let triple = (numero1) => numero1 * 3;
let aplicarCallback = (numero1, operacion) => operacion (numero1);

console.log(aplicarCallback(2, triple));