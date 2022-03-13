
divEjemplo = document.getElementById("ejemplo");

products = [
    {
        "name": "Product 1",
        "price": 100
    },
    {
        "name": "Product 2",
        "price": 200
    },
    {
        "name": "Product 3",
        "price": 300
    }
];

function showProduct(name, price) {
    console.log(name);
    console.log(price);
}

function showAllProducts() {
    divEjemplo.innerHTML = "";
    products.forEach((product) => {
        
        divEjemplo.innerHTML += `<p>${product.name} - ${product.price}</p>
        <button onclick="showProduct('${product.name}', '${product.price}')">Show</button>`;
    });
}

document.addEventListener("DOMContentLoaded", showAllProducts);
