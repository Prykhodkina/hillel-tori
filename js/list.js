`use strict`


const table = document.getElementById('product-table');

const getProducts = () => JSON.parse(localStorage.getItem('products')) || [];


function renderProducts() {
    const products = getProducts().reverse();
    table.innerHTML = '';

    products.forEach((product) => {
        const row = document.createElement('tr');
// product.price = Number(product.price);
        row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price} UAH</td>
      <td>
        <button class="btn btn-warning btn-sm edit-btn me-2" data-id="${product.id}">Edite</button>
        <button class="btn btn-danger btn-sm delete-btn" data-id="${product.id}">Delete</button>
      </td>
    `;

        table.appendChild(row);
    });
}

function deleteProduct(id) {
    const products = getProducts().filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    renderProducts();
}

table.addEventListener('click', (e) => {
    const btn = e.target;
    const id = btn.dataset.id;

    if (btn.classList.contains('delete-btn')) {
        deleteProduct(id);
    }

    if (btn.classList.contains('edit-btn')) {
        localStorage.setItem('selectProductID', id);
        window.location.href = 'edit.html';
    }
});

renderProducts();

