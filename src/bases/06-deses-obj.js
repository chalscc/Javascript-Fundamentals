// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};


const retornaPersona = ({nombre, clave, edad, rango = 'Capitán'}) => {
    console.log(nombre, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

// const {nombreClave, anios, latlng: {lat,lng}} = retornaPersona(persona);
const {nombreClave, anios, latlng } = retornaPersona(persona);

const {lat, lng} = latlng;

console.log(nombreClave, anios, lat, lng);