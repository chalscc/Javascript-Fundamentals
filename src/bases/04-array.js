const arreglo = [1, 2, 3, 4, 5];

let arreglo2 = [...arreglo, 6];

console.log(arreglo);
console.log(arreglo2);

let double = arreglo.map((numero) => {
    return numero * 2;
});

console.log(double);