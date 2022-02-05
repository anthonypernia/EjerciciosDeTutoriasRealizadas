


let nombreIn = prompt('Ingrese su nombre');

if(nombreIn === 'Juan'){
    console.log('eres Juan');
}

alert('hola ' + nombreIn);

let cantidadAContar = prompt('Ingrese la cantidad a contar');
while(cantidadAContar > 0){
    console.log(cantidadAContar);
    cantidadAContar--;
}

let numeroIn = parseInt(prompt('Ingrese un numero'));

if (numeroIn > 100){
    alert('es mayor a 100');
}else{
    alert('es menor a 100 o 100');
}

let numeroIn2 = parseInt(prompt('Ingrese un numero'));

if ((numeroIn2 > 10) && (numeroIn2 < 50)){
    alert('es mayor a 10 y menor a 50');
}




