const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123456,
        lat: 87.12,
        lng: 12.23
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);