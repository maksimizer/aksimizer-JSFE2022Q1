export let favorites: string[] = [];

function getFavorites() {
    const favoritesStr = localStorage.getItem('favorites');
    if (favoritesStr) {
        favorites = JSON.parse(favoritesStr);
    }
    return favorites;
}

export function setFavorites() {
    getFavorites();
    localStorage.setItem('favorites', JSON.stringify(favorites));
    const storagedStr = localStorage.getItem('favorites');
    if (storagedStr) {
        favorites = JSON.parse(storagedStr);
    }
    document.querySelectorAll('.cart-button').forEach((button) => {
        const value = button.textContent as string;
        if (favorites.includes(value)) {
            button.classList.add('cart-button-remove');
        }
    });

    getFavoritesValues();
    setCartCounter();
}

function getFavoritesValues() {
    document.querySelectorAll('.cart-button').forEach((button) => {
        button.addEventListener('click', addToCart);
        function addToCart() {
            if (!button.classList.contains('cart-button-remove') && favorites.length < 20) {
                button.classList.add('cart-button-remove');
                if (button.textContent) favorites.push(button.textContent);
            } else if (!button.classList.contains('cart-button-remove') && favorites.length == 20) {
                alert('Простите, к сожалению, больше 20 штук в одни руки не выдаем...');
            } else {
                button.classList.remove('cart-button-remove');
                const index = favorites.indexOf(`${button.textContent}`);
                favorites.splice(index, 1);
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setCartCounter();
        }
    });
}

function setCartCounter() {
    const cartDiv = document.querySelector('.cart') as HTMLElement;
    const cartCounter = favorites.length;
    cartDiv.textContent = cartCounter.toString();
}
