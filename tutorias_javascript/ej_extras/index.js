
let nombre = prompt("¿Cómo te llamas?");

for(let i = 0 ; i < 50 ; i++){
    console.log(`Hola ${nombre}`);
}

let edad = prompt("dime tu edad");
alert(`Tu edad es ${edad}`);

let edadNumero = parseInt(edad);

if (edadNumero > 18){
    alert("Eres mayor de edad");
}else{
    alert("eres menor")
}
