// variables primitivas: string, number, boolean, undefined
let edad = 40;

let nuevaEdad = edad + 1;

// console.log("Edad anterior: ", edad);
// console.log("Nueva edad:", nuevaEdad);

// no primitivas: function, object, array, Symbol
let ingresos = [4500, 5100, 4700];

// Llega junio y cobro el nuevo sueldo. Cobrará 5500
let ingresosActualizados = ingresos.map(n => n);
ingresosActualizados.push(5500);

console.log("Ingresos hasta Junio:", ingresos);
console.log("Ingresos contando Junio:", ingresosActualizados);
