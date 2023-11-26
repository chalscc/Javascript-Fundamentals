const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log(...personajes);

const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// 1. El primer valor del array se llamara nombre
// 2. Se llamara setNombre
const dameNombre = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = dameNombre('Goku');

console.log(nombre);
setNombre();