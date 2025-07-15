`use strict`

const selectID = localStorage.getItem(`selectProductID`);

const products = JSON.parse(localStorage.getItem(`products`)) || [];

const edit = products.find(p=> p.id === selectID);

if (!edit) {
    alert(`Product not found`);
    window.location.href = `list.html`;
}
document.getElementById('product-name').value = edit.name;
document.getElementById('product-description').value = edit.description;
document.getElementById('product-price').value = edit.price;

const form = document.getElementById('edit-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameUpdate = document.getElementById('product-name').value.trim();
    const descriptionUpdate = document.getElementById('product-description').value.trim();
    const priceUpdate = Number(document.getElementById('product-price').value.trim());
if (!priceUpdate || isNaN(priceUpdate) || priceUpdate <=0 || !descriptionUpdate || !nameUpdate) {
    alert(`Please enter all data correctly!`);
    return;
}
    edit.name = nameUpdate;
    edit.description = descriptionUpdate;
    edit.price = priceUpdate;

    const productsUpdated = products.map(product =>
        product.id === selectID ? edit : product
    );

    localStorage.setItem('products', JSON.stringify(productsUpdated));
    window.location.href = 'list.html';
});


