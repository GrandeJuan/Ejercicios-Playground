// DESTRUCTURACION ARRAY

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

let [, bariloche] = destinosDelMundo;
let [, , , china] = destinosDelMundo;

console.log(destinosDelMundo);
console.log(bariloche);
console.log(china);