
// function crearPersona(nombre, apellido ) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre , apellido});


const persona = crearPersona( 'Fernando' ,  'Herrera');
console.log( persona );

function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = ( ...args ) => {
    // console.log( args  )

    return args;
}

// imprimeArgumentos(10, true, false, 'Fernando', 'Hola');
const [ casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo})



const persona2 = crearPersona( 'Fernando' ,  'Herrera');


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};


const imprimePropiedades = ( {nombre, codeName, vivo, edad, trajes} ) => {
    console.log( nombre )
}

imprimePropiedades(tony);