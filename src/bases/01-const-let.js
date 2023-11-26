// Variables y constantes
const nombre = 'Carles';
const apellido = 'Calabuig';

let valorDado = 5;
valorDado = 4;

if (true) {    
    // Variable de scope local
    let valorDado = 6;
    console.log(valorDado)
}

console.log(valorDado);