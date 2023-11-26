const saludar = function (nombre) {
    return `Hola ${nombre}`
  }

const saludar2 = (nombre) => {
  return `Hola ${nombre}`
}

const saludar3 = (nombre) =>  `Hola ${nombre}`;
  

console.log(saludar3('Carles'))

const getUser = () => ({    
    uid: 'UID-1',
    username: 'Carles'    
});

const user = getUser();
console.log(user);

function getUsuarioActivo(nombre) {
    return {
        uid: 'UID-2',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Carles');

console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
    uid: 'UID-3',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Carles');

console.log(usuarioActivo2);