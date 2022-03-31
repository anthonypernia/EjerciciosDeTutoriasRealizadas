// console.log('sincronico')

// setTimeout(() => {
//     console.log('asincronico');
//     }
// , 1000);

// console.log('sincronico')

/////////////////



/////////////////

// for (let letra of 'async') {
//     console.log(letra);
//     setTimeout(() => {
//         console.log(letra);
//     }
//     , 1000);
// }

/////////////////

// console.log('inicio')

// setTimeout(() => {
//     console.log('medio');
//     }
// , 0);

/////////////////

// console.log('final')

// setInterval(() => {
//     console.log('intervalo');
// }
// , 1000);

/////////////////

// let counter = 0

// const interval = setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)

//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log("Se removió el intervalo")
//     }
// }, 1000)


/////////////////

// const eventoFuturo = (res) => {
//     return new Promise( (resolve, reject) => {
//         if (res === true) {
//             resolve('Promesa resuelta')
//         } else {
//             reject('Promesa rechazada')
//         }
       
//     })
// }

// console.log( eventoFuturo(true) ) 
// console.log( eventoFuturo(false) )


/////////////////

const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    })
}

// eventoFuturo(true)
//     .then( (response) => {
//         console.log(response) // Promesa resuelta
//     })

// eventoFuturo(false)
//     .catch( (error) => {
//         console.log(error) // Promesa rechazada
//     })


/////////////////

// eventoFuturo(true)
//     .then( (response) => {
//         console.log(response)
//     })
//     .catch( (error) => {
//         console.log(error)
//     })
//     .finally( () => {
//         console.log("Fin del proceso")
//     })

//////////////////

// const BD = [
//     {id: 1, nombre: 'Producto 1', precio: 1500},
//     {id: 2, nombre: 'Producto 2', precio: 2500},
//     {id: 3, nombre: 'Producto 3', precio: 3500},
//     {id: 4, nombre: 'Producto 4', precio: 3500},
// ]

// const pedirProductos = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             resolve(BD)
//         }, 3000)
//     })
// }

// let productos = []

// const renderProductos = (arr) => {
//     console.log(arr)
// }

// // asincrónicamente pedimos los datos y generamos la vista
// pedirProductos()
//     .then((res) => {
//         productos = res
//         renderProductos(productos)
//     })
