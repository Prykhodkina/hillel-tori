`use strict`

const form = document.getElementById('product-form');
const nameInput = document.getElementById('product-name');
const descriptionInput = document.getElementById('product-description');
const priceInput = document.getElementById('product-price');

const generateID = () => Date.now().toString();

const getProducts = () => JSON.parse(localStorage.getItem('products')) || [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const description = descriptionInput.value.trim();
    const price = Number(priceInput.value.trim());

    if (!name || !description || isNaN(price) || price <= 0) {
        alert('Please enter all data correctly!');
        return;
    }

    const newProduct = {
        id: generateID(),
        name,
        description,
        price
    };

    const products = getProducts();
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    window.location.href = 'list.html';
});



