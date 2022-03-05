localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');
sessionStorage.setItem('time', '12:00');

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
let time = sessionStorage.getItem('time');
console.log(name);
console.log(age);
console.log(time);

localStorage.removeItem('name');
sessionStorage.removeItem('time');

localStorage.clear();

let user = {
    name: 'John',
    age: 30
};

localStorage.setItem('user', JSON.stringify(user));

let localStorageUser = JSON.parse(localStorage.getItem('user'));
console.log(localStorageUser);

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let productsList = [
    new Product('iPhone', 1000),
    new Product('Samsung', 500),
    new Product('Huawei', 300)
];

localStorage.setItem('products', JSON.stringify(productsList));

productsListLocal = JSON.parse(localStorage.getItem('products'));
console.log(productsListLocal);