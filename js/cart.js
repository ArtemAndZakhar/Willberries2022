// Инкапсуляция кода мы инкапсулировали все переменные внутри функции.
const cart = function () {
    const cartBtn = document.querySelector('.button-cart'),
        cart = document.getElementById('modal-cart'),
        closeBtn = cart.querySelector('.modal-close');

    // console.log(cart);
    cartBtn.addEventListener('click',() => {
        cart.style.display = 'flex';
    })
    closeBtn.addEventListener('click',() => {
        cart.style.display = '';
    })
}
cart();