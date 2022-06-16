let ingresos = [4500, 5100, 4700];

// Copiar los valores de un array en un NUEVO array
// Operador spread 

let ingresosActualizados = [4100, ...ingresos, 5500];


// console.log("Ingresos hasta Junio:", ingresos);
// console.log("Ingresos contando Junio:", ingresosActualizados);

// 2. Objeto que representa un perro
let perro = {
    nombre: "Goody",
    edad: 13,
    raza: "Colie mestizo"
};

let perro_actualizado = { ...perro, estaVacunado: true };

// 3 De un objeto, puedo copiar alguas de sus propiedades. Esto es con el "operador" de 'rest'. 


// Imagina que del objeto 'perro' te quieres quedar en dos variables solo con su raza y su nombre
let { raza, nombre } = perro;
console.log("Raza del perro:", raza);
console.log("Nombre del perro:", nombre);

// 4. Operador de spread o desestructuración también lo usamos para
// Imagina que quiero conocer de todos los meses de trabajo en Big Data cual fue el mes que menos cobré ingresosActualizados

console.log("El mes que menos cobré fueron: ", Math.min(...ingresosActualizados));
