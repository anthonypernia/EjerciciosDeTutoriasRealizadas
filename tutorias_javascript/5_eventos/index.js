///llamo todo el nodo
console.dir(document)
console.dir(document.body)
///obtengo el eleemtno mediante un id
let texto1 = document.getElementById('texto1')
let boton1 = document.getElementById('boton1')
///me mostrara el html del elemento
console.log(texto1)
/// obtengo el elemento mediante la clase
let textoclass = document.getElementsByClassName('textoclass')
console.log(textoclass)
for(let i = 0; i < textoclass.length; i++){
    console.log(textoclass[i])
}
//// le cambio el texto al elemento
texto1.innerHTML = 'Nuevo texto'
///cambio color
texto1.style.color = 'red'
///muestro la clase
console.log(texto1.className)
//// crear elemento y agregarlo
let parrafo = document.createElement('p')
parrafo.innerHTML = '<p>Nuevo parrafo desde js</p>'
document.body.appendChild(parrafo)
///remover un elemento
let texto2 = document.getElementById('texto2')
texto2.remove()

//// obtener valor de un imput con un evento
let inputtext = document.getElementById('inputtext')
document.addEventListener('click', function(e){
    console.log(inputtext.value)
})

let divcualquiera = document.getElementById('divcualquiera')

divcualquiera.innerHTML = '<p>Nuevo texto</p>'

//// obtener elementos mediante query selector
let parr = document.querySelector('#contenedor p') //Selecciona el primer elemento que coincida con el selector
parr.innerHTML = '<p>Nuevo texto son query selector</p>'


//eventos
boton1.addEventListener('mouseover', function(e){
    console.log('mouseover')
    boton1.style.backgroundColor = 'red'
})
boton1.addEventListener('mouseout', function(e){
    console.log('mouseout')
    boton1.style.backgroundColor = 'blue'
})

let formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function(e){
    
    e.preventDefault()
    console.log('submit')
})










