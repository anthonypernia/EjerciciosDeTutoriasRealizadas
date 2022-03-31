let async_button = document.getElementById('async_button');
let input_name = document.getElementById('input_name');

// async_button.addEventListener('click', function () {
//     console.log(input_name.value);
//     setTimeout(() => {
//         alert(input_name.value);
//         }
//     , 3000);
// });

const userEvent = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            input_name ? resolve(input_name.value) : reject('error')
        }, 2000)
    })
}

async_button.addEventListener('click', async () => {
    userEvent()
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("Gracias")
    })
})