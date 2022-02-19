///Arrays , recuerden que son lsitas de cualquier dato, y podemos recorrerlos con un bucle for
let a =  [1, '2424', true]

console.log(a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

///el a.length nos da el numero de elementos que tiene el array
for (let i = 0; i < a.length; i++) {
    console.log(`value =   ${a[i]} y index = ${i}`);
}

////push nos permite añadir un elemento al final del array
a.push('hola');
console.log(`el array despues del push quedo con ${a.length} elementos, \n los valores son: ${a}`);

for (let i = 0; i < a.length; i++) {
    console.log(`value =   ${a[i]} y index = ${i}`);
}

///unshift nos permite añadir un elemento al principio del array
a.unshift('esto es un unshift');
console.log(`el array despues del unshift quedo con ${a.length} elementos, \n los valores son: ${a}`);

/// shift nos permite eliminar el primer elemento del array
a.shift();
console.log(`el array despues del shift quedo con ${a.length} elementos, \n los valores son: ${a}`);

/// pop nos permite eliminar el ultimo elemento del array
a.pop();
console.log(`el array despues del pop quedo con ${a.length} elementos, \n los valores son: ${a}`);

//agregamos mas elementos
a.push('hola4', 'hola2', 'hola3');

///usando splice podemos eliminar elementos del array

console.log(`el array antes de splice con ${a.length} elementos, \n los valores son: ${a}`);
a.splice(3, 2);
//el primero es, a partir de donde, y el segundo ,cuantos elementos quieres eliminar
console.log(`el array despues de splice con ${a.length} elementos, \n los valores son: ${a}`);

///el join nos permite unir los elementos del array en una cadena
let b = ['hola', 'chicos', 'como', 'estan'];
let b_join = b.join(' - ');
console.log(b_join);

///el concat nos permite unir dos arrays
let c = a.concat(b);
console.log(` el array c despues de concat con ${c.length} elementos, \n los valores son: ${c}`);

/// array concatenado unido con join
console.log('cualquier cosa ' + c.join(' **** '));


///slice nos permite cortar un array
let d = c.slice(1, 3);
console.log(` el array d despues de slice con ${d.length} elementos, \n los valores son: ${d}`);

///usando indexof, para saber si un elemento esta en el array
let e = c.indexOf('hola');
console.log(` el valor "hola" esta en el index ${e}`);

///usando includes para saber si un elemento esta en el array
let f = c.includes('hola');
console.log(` el valor "hola" esta en el array ??????  = ${f}`);

///usando inverse
///ojo que modifica el original tambien
let c_reverse = c.reverse();
console.log(` el array g despues de reverse con ${c_reverse.length} elementos, \n los valores son: ${c_reverse}`);


//trabajando con obj
let obj1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}
let obj2 = {
    nombre: 'Pedro',
    apellido: 'Perez',
    edad: 30
}

let obj3 = {
    nombre: 'Rosa',
    apellido: 'Perez',
    edad: 20
}
///creamos un array de un objeto
let arrayObj = [obj3]
//agregamos otro objeto al array
arrayObj.push(obj1);

console.log(arrayObj);

arrayObj.push(obj2);

for ( let obj of arrayObj) {
    console.log(obj.nombre);
}

let arr5 = [1, 2, 3, 4, 5, 8888, 7, 8, 9, 10];

for (let num of arr5) {
    console.log(num);
}


function mayorQue(n){
    return (m) => m>n;
}
///es como que devolvieras la funcion, como si la escribieras
let mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez(20));
console.log(mayorQueDiez(5));

///aca vemos un ejemplo de una funcion que retorna una funcion
function operacion(op){
    if (op === '+') {
        return (a, b) => a + b;
    }
    if (op === '-') {
        return (a, b) => a - b;
    }
    if (op === '*') {
        return (a, b) => a * b;
    }
}
//// le vamos pasando la operacion que queremos
let suma = operacion('+');
let resta = operacion('-');
let multiplicacion = operacion('*');
///aplicamos la operacion
console.log(suma(10, 20));
console.log(resta(10, 20));
console.log(multiplicacion(10, 20));

///otro ejemplo
function sumarleCienYMostrar(numero){
    return console.log(numero + 100);
}

function recorrer( fn , arr){
    for (let num of arr) {
        fn(num);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
recorrer(sumarleUnoYMostrar, array);

////funciones por parametro
function porCadaUno(arr, fn){
    for (let num of arr) {
        fn(num);
    }
}

let numeros = [1, 2, 3, 4];
porCadaUno(numeros, console.log);

let total = 0

function acumular(num){
    total += num;
}

porCadaUno(numeros, acumular);
console.log(total);

///lo mismo con arrow function
porCadaUno(numeros, (num) => {
    total += num;
});
///da 20 porque suma todos los numeros 2 veces
console.log(total);



let array44 = [1, 34, 3, 4, 77, 6, 7, 83, 9, 10];
array44.forEach(function(num){
    console.log(num);
}
);

///usando find
let nombres = ['maria', 'juan', 'antonio', 'agustina', 'jose']

let x = nombres.find((nombre) => {
    return nombre.length > 5;
    });
////el primer elemento que cumpla con eso
console.log(x);

////filter
let y = nombres.filter((nombre) => {
    return nombre.length > 5;
    }
);
////el array con los elementos que cumplen con eso
console.log(y);

///some
let z = nombres.some((nombre) => {
    return nombre.length > 5;
    }
);
////true o false si alguno de los elementos cumple con eso
console.log(z);


//map
let w = nombres.map((nombre) => {
    return nombre.length > 5;
    }
);
////el array con los elementos que cumplen con eso en true o false
console.log(w);


///reduce
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let p = array2.reduce((acumulador, numero) => {
    return acumulador + numero;
}
);



////sort
let arrayDesordenado = [13, 21, 53, 4, 54, 63, 97, 8, 9, 10];
let arrayOrdenado = arrayDesordenado.sort((a, b) => {
    return a - b;
}
);
console.log(arrayOrdenado);


///MATH
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.4));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));
console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9, 10));


