
function saludar( nombre ) {
    console.log('Hola' + nombre);
}

let nombre = "Fernando";


saludar(nombre);

// const saludar2= function(){
//     console.log('Hola mundo');
// }

// saludar2();

const saludarFlecha = (nombre) => {
    console.log('hola', nombre)
    return 10;
}

saludarFlecha( nombre );

const retornoDeSaludar = saludarFlecha(nombre);
console.log(retornoDeSaludar);


let a = 1, b= 2

function sumar (a, b){
    return a + b;
}

const sumarflecha = (a, b) => {
    return a + b
}

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( sumar(a, b) );
console.log( sumarflecha( a, b))
console.log( getAleatorio());
console.log( getAleatorio2());