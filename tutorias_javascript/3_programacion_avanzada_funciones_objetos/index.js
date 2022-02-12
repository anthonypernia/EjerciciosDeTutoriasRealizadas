class Usuario{
    constructor(nombre, apellido, edad, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        ///esta es una funcion anonima
        
        this.otroSaludo = function(){
            console.log("Hola, soy " + this.nombre + " " + this.apellido + " desde funcion anonima");
        }
        //esta es una funcion flecha
        this.saludoFlecha = () => {
            console.log("Hola, soy " + this.nombre + " " + this.apellido + " desde funcion flecha");
        }
    }
    ///esta es una funcion normal
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años, desde funcion normal`);
    }
}

let ususario1 = new Usuario('Juan', 'Perez', 30, 'Calle 123');
ususario1.saludar();
ususario1.otroSaludo();
ususario1.saludoFlecha();

// for(let att in ususario1){
//     console.log(att);
//     console.log(ususario1[att]);
// }