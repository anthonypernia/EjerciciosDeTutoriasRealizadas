let usuario = {

    nombre: 'Juan',
    edad: 19,
    apellido: 'Perez',
}

let permiso;

if (usuario.edad >= 18) {
    permiso = true;

}else{
    permiso = false;
}

console.log(permiso);

let permiso2 = usuario.edad >= 18 ? true : false;

console.log(permiso2);

let carrito = [];

if (carrito.length === 0) {
    console.log('El carrito esta vacio');
}

carrito.length === 0 ? console.log('El carrito esta vacio') : console.log('El carrito tiene elementos');

let registroIngreso = usuario.edad >= 18 && new Date()

console.log(registroIngreso);

let valorNulo = null;

let valor = '' || 'valor por defecto';

console.log(valor);

localStorage.setItem('nombre', 'Juan');

let nombre2 = localStorage.getItem('nombre') || 'Anonimo';
console.log(nombre2);

///la diferencia es que evalua si los valores son nulos pero acepta un string vacio
let otroValor = '' ?? 'valor por defecto2';
console.log(otroValor);

let { nombre, edad } = usuario;

console.log(nombre, edad);

let { nombre: n, edad: e } = usuario;

console.log(n, e);

let { telefono } = usuario;
console.log(telefono);

window.addEventListener('click', ({target, type}) => {
    console.log(target);
    console.log(type);
}
);

let nombres = ['Juan', 'Pedro', 'Maria', 'Ana'];
let [a, b] = nombres;
console.log(a, b);

let [,,c, d] = nombres;
console.log(c, d);

console.log(nombres);
console.log(...nombres);

let numeros = [1, 2, 3, 4, 5, 6 , 7];

console.log(Math.max(...numeros));

let sumar = (...numeros) => {
    return numeros.reduce((a, b) => a + b);
}

numeros ? console.log(sumar(...numeros)) : console.log('No hay numeros');

let mostrarNumero = (...numeros) => {
    for (let numero of numeros) {
        console.log(numero);
    }
}

mostrarNumero(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);