export let addedToCart: string[] = [];

function getAddedToCart() {
    const addedToCartStr = localStorage.getItem('addedToCart');
    if (addedToCartStr) {
        addedToCart = JSON.parse(addedToCartStr);
    }
    return addedToCart;
}

export function setAddedToCart() {
    getAddedToCart();
    localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
    const storagedStr = localStorage.getItem('addedToCart');
    if (storagedStr) {
        addedToCart = JSON.parse(storagedStr);
    }
    document.querySelectorAll('.cart-button').forEach((button) => {
        const value = button.textContent as string;
        if (addedToCart.includes(value)) {
            button.classList.add('cart-button-remove');
        }
    });

    addToCart();
    setCartCounter();
}

function addToCart() {
    document.querySelectorAll('.cart-button').forEach((button) => {
        button.addEventListener('click', addToCart);
        function addToCart() {
            if (!button.classList.contains('cart-button-remove') && addedToCart.length < 20) {
                button.classList.add('cart-button-remove');
                if (button.textContent) addedToCart.push(button.textContent);
            } else if (!button.classList.contains('cart-button-remove') && addedToCart.length == 20) {
                alert('Простите, к сожалению, больше 20 штук в одни руки не выдаем...');
            } else {
                button.classList.remove('cart-button-remove');
                const index = addedToCart.indexOf(`${button.textContent}`);
                addedToCart.splice(index, 1);
            }
            localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
            setCartCounter();
        }
    });
}

function setCartCounter() {
    const cartDiv = document.querySelector('.cart') as HTMLElement;
    const cartCounter = addedToCart.length;
    cartDiv.textContent = cartCounter.toString();
}
