let buttonShowAllProducts = document.getElementById("button-show-all-products");
let searchInput = document.getElementById("search-input");
let eventMouseExample = document.getElementById("event-mouse-example");
let userProducts = [];
let data = [
  {
    id: "5f20f53a54c7bc0017856c7f",
    nombre: "Antipulgas Y Garrapatas Bravecto Para Perros",
    descripcion:
      "Producto especializado para perros de pequeños. Uso veterinario.",
    precio: 1000,
    stock: 10,
    imagen:
      "https://puppis.vteximg.com.br/arquivos/ids/167383-1000-1000/366255.jpg?v=637014017122630000",
  },

  {
    id: "5f20f54254c7bc0017856c80",
    nombre: "Antiparasitario Interno Total Full CG Perros - 15 Cc",
    descripcion:
      "Antiparasitario interno en suspensión oral, contiene Fenbendazol y Toltrazuril. Uso veterinario.",
    precio: 350,
    stock: 2,
    imagen:
      "https://puppis.vteximg.com.br/arquivos/ids/159614-1000-1000/382117.jpg?v=636211162343630000",
  },

  {
    id: "5f20f54c54c7bc0017856c81",
    nombre: "FRONTLINE Spray - 100 ml",
    descripcion:
      "Antiparasitario externo. Es un producto de gran eficacia para controlar pulgas, garrapatas y piojos en perros y gatos. Desde los dos días de edad. Contiene Fipronil.",
    precio: 1190,
    stock: 2,
    imagen:
      "https://puppis.vteximg.com.br/arquivos/ids/170176-1000-1000/373019.png?v=637142631469200000",
  },

  {
    id: "5f20f55554c7bc0017856c82",
    nombre: "Total Full Cachorro Suspension - 15 Cc",
    descripcion:
      "Antiparasitario interno en suspensión oral. Estuche con frasco con 15 ml y jeringa dosificadora. Contiene Fenbendazol y Pirantel.",
    precio: 240,
    stock: 10,
    imagen:
      "https://puppis.vteximg.com.br/arquivos/ids/167371-1000-1000/382117.jpg?v=637014017065900000",
  },

  {
    id: "5f20f55554c7bc0017856c82",
    nombre: "Total Full Cachorro Suspension - 15 Cc",
    descripcion:
      "Antiparasitario interno en suspensión oral. Estuche con frasco con 15 ml y jeringa dosificadora. Contiene Fenbendazol y Pirantel.",
    precio: 240,
    stock: 10,
    imagen:
      "https://puppis.vteximg.com.br/arquivos/ids/167371-1000-1000/382117.jpg?v=637014017065900000",
  },

  {
    id: "5f20f55554c7bc0017856c82",
    nombre: "Total Full Cachorro Suspension - 15 Cc",
    descripcion:
      "Antiparasitario interno en suspensión oral. Estuche con frasco con 15 ml y jeringa dosificadora. Contiene Fenbendazol y Pirantel.",
    precio: 240,
    stock: 10,
    imagen:
      "https://puppis.vteximg.com.br/arquivos/ids/167371-1000-1000/382117.jpg?v=637014017065900000",
  },
];

searchInput.addEventListener("keyup", (e) => {
  filteredData = data.filter((element) => {
    return element.nombre.toLowerCase().includes(e.target.value.toLowerCase());
  });
  showProducts(filteredData);
});

class Producto {
  constructor(title, description, price) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.fechaDeCompra = new Date().toLocaleDateString();
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getPrice() {
    return this.price;
  }
  getFechaCompra() {
    return this.fechaDeCompra;
  }
}

function showProducts(data) {
    let result = "";
    let mainContainer = document.getElementById("main-container");
    data.forEach((element) => {
    result += `<div class="card-container">
                <h1>${element.nombre}</h1>
                <div>
                    <img class="img-card"
                        src="${element.imagen}"
                        alt="">
                    <div>
                        <h2>
                            ${element.precio}
                        </h2>
                        <h3>${element.descripcion}</h3>
                        <button class="button-card">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                </div>
                `;
    });
    mainContainer.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", () => {
  showProducts(data);
  activateButtons();
  activateButtonAll();
});

function addCart(e) {
  //show items
  let obj = formatData(e.target.parentElement.parentElement.parentElement);
  alert(`
        El usuario compro: ${obj.getTitle()}
        La fecha: ${obj.getFechaCompra()}
        Por precio: ${obj.getPrice()}
    `);
  userProducts.push(obj);
}

function formatData(item) {
  let title = item.querySelector("h1").innerText;
  let price = item.querySelector("h2").innerText;
  let description = item.querySelector("h3").innerText;
  return new Producto(title, description, price);
}

function activateButtons() {
  buttons = document.querySelectorAll(".button-card");
  buttons.forEach((button) => {
    button.addEventListener("click", addCart);
  });
}

function activateButtonAll() {
  buttonShowAllProducts.addEventListener("click", () => {
    let priceTotal = 0;
    userProducts.forEach((product) => {
      priceTotal += parseInt(product.getPrice());
    });
    alert(`
            Total a pagar: ${priceTotal}
        `);
  });
}


eventMouseExample.addEventListener("mouseover", (e) => {
  eventMouseExample.style.backgroundColor = "red";
});
eventMouseExample.addEventListener("mouseout", (e) => {
  eventMouseExample.style.backgroundColor = "blue";
});