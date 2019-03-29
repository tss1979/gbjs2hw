const products = [
    {title: 'Notebook', price: 2000},
    {title: 'Mouse', price: 20},
    {title: 'Keyboard', price: 48},
    {title: 'Gamepad', price: 63},
    {title: 'Chair', price: 200}
];


const renderProduct = (title, price = 2000) => {
    return `<div class="product-item">
                <h3 class="productName">${title}</h3>
                <p class="price">${price} уе</p>
                <button class="btn-cart_product" type="button">Добавить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item =>
        renderProduct(item.title, item.price)).join(' ');
};
renderPage(products);