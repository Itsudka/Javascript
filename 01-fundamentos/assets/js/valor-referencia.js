
let a = 10, b = a;

a = 30;

console.log({a, b});

let juan = { nombre: 'Juan'};
let ana = { ...juan};

ana.nombre = 'Ana';

console.log({juan, ana})

const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony'
    return persona;
} 

let peter = { nombre: 'Peter' };
let tony = cambiaNombre (peter);

console.log({ peter, tony });






const frutas = ['Manzana', 'Pera', 'Piña'];

const otrasFrutas = [...frutas];

// const otrasFrutas = frutas.slice;


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

