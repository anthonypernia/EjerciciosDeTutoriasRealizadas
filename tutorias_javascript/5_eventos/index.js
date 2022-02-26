console.log(document)
console.log(document.body)

let texto1 = document.getElementById('texto1')
let boton1 = document.getElementById('boton1')

console.log(texto1)

let textoclass = document.getElementsByClassName('textoclass')
console.log(textoclass)

texto1.innerHTML = 'Nuevo texto'
texto1.style.color = 'red'
console.log(texto1.className)

let parrafo = document.createElement('p')
parrafo.innerHTML = '<p>Nuevo parrafo desde js</p>'
document.body.appendChild(parrafo)

let texto2 = document.getElementById('texto2')
texto2.remove()

let inputtext = document.getElementById('inputtext')
document.addEventListener('click', function(e){
    console.log(inputtext.value)
})

let divcualquiera = document.getElementById('divcualquiera')

divcualquiera.innerHTML = '<p>Nuevo texto</p>'

let parr = document.querySelector('#contenedor p') //Selecciona el primer elemento que coincida con el selector
parr.innerHTML = '<p>Nuevo texto son query selector</p>'

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










