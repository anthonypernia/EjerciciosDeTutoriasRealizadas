
///funcion comun que recibe dos valores y devuelve la suma
function sumar(a, b) {
    return a + b;
}

/// hace lo mismo que la funcion anterior pero con una sola linea, el nombre viene por el simbolo =>
const suma_version_flecha = (a, b) => a + b;

// hace lo mismo solo que al estar entre llaves , da la oportunidad de poner mas codigo
const suma_version_flecha_2 = (a, b) => {
    console.log('Suma, aca podria ir mas codigo');
    return a + b;
}

//muy parecido a la funcion anterior solo que en este caso si devclaramos como funcion  y no como flecha =>
const suma_anonima = function(a, b) {
    console.log("aca puede irm as ocdigo")
    return a + b;
}

console.log(suma_version_flecha(1, 2));
console.log(suma_version_flecha_2(1, 2));
console.log(suma_anonima(1, 2));
console.log(sumar(1, 2));

