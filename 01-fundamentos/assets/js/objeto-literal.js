const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log( personaje )
console.log('Nombre:', personaje.nombre); 

// console.log('Nombre', personaje['nombre'])

console.log('Edad:', personaje.edad)
console.log('Coors', personaje.coords)
console.log('No. Trajes', personaje.trajes.length)
console.log('Ultimo traje',personaje.trajes[ personaje.trajes.length-1])
console.log('Direccion:', personaje.direccion)

const x = 'vivo';
console.log('Vivo', personaje[x]);






delete personaje.edad;
console.log( personaje );

personaje.casado = true;

const entriesPare = Object.entries( personaje );
console.log( entriesPare );

Object.freeze( personaje );


personaje.dinero = 1000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje);

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({ propiedades, valores })