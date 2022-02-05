// let compramosComida = false;

// if (compramosComida) {
//     console.log('compramos comida');
// }else{
//     console.log('no compramos comida');
// }

// let compramosCafe = false;
// let compramosMate = true;

// if (compramosCafe || compramosMate) {
//     console.log('compramos cafe o mate');
// }

// if (compramosCafe && compramosMate) {
//     console.log('compramos cafe y mate');
// }

// let edad = 29;

// if (edad > 18) {
//     console.log('eres mayor de edad');
// }else{
//     console.log('eres menor de edad');
// }

// let nombre = 'Juan';

// if (nombre == 'Juan') {
//     console.log('eres Juan');
// }

// if (nombre !== 'Juan') {
//     console.log('no eres Juan');
// }

// if (!compramosComida) {
//     console.log('no compramos comida');
// }

// console.log('--1ro--');

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log('--2do--');

// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

// console.log('--3ro--');
// for(let i = 0; i < 10; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// console.log('--4to--');
// for(let i = 0; i < 10; i++){

//     if (i === 3) {
//         console.log('salto de iteracion');
//         continue;
//     }

//     console.log(i);

//     if (i == 5) {
//         console.log('cortamos');
//         break;  // cortamos el ciclo
//     }
// }


// console.log('--while--');

// let cantidadDeRepeticiones = 12;

// while (cantidadDeRepeticiones > 0) {
//     console.log(cantidadDeRepeticiones);
//     cantidadDeRepeticiones--;
    
// }

// // let entrada = prompt('ingrese un dato');

// // while( entrada != 'ESC' ){

// //     alert('ingresaste: ' + entrada);
// //     entrada = prompt('ingrese un dato');
// // }
// console.log('--do while--');
// let cantidadDeRepeticiones2 = 12;
// do{
//     cantidadDeRepeticiones2--;

//     console.log(cantidadDeRepeticiones2);
// }while(cantidadDeRepeticiones2 > 0);


let numero = 50;

switch(numero){
    case 1:
        console.log('uno');
        break;
    case 2:
        console.log('dos');
        break;
    case 3:
        console.log('tres');
        break;
    case 4:
        console.log('cuatro');
        break;
    case 5:
        console.log('cinco');
        break;
    default:
        console.log('no es un numero valido');
}

// console.log('----con break')
// let nombre2 = 'Antnoio';
// switch(nombre2){
//     case 'Juan':
//         console.log('eres Juan');
//         break;
//     case 'Antnoio':
//         console.log('eres Antnoio');
//         break;
//     default:
//         console.log('no eres Juan ni Antnoio');
// }

console.log('----sin break')
let nombre3 = 'Antnoio';
switch(nombre3){
    case 'Antnoio':
        console.log('eres Antnoio');
    case 'Juan':
        console.log('eres Juan');
    default:
        ///esto lo va a ejecutar
        console.log('no eres Juan ni Antnoio');
}

let hola = 'HolA';
let holaUpper = hola.toUpperCase();
console.log(holaUpper);
let holaLower = hola.toLowerCase();
console.log(holaLower);
let variableCualquiera = ''

for(let i = 0 ; i<19; i+=2){
    console.log(i)
}

for(let i = 0 ; i<19; i+=3){
    console.log(i)
}

