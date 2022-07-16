export function addSearch() {
    searchField.addEventListener('keyup', search);
}

const searchField = document.querySelector('.search') as HTMLInputElement;
export function search() {
    const names = document.querySelectorAll('.item-name');
    names.forEach((el) => {
        const name = el.textContent as string;
        const card = el.parentElement as HTMLElement;
        if (searchField.value && name.toLowerCase().includes(`${searchField.value.toLowerCase()}`)) {
            card.classList.remove('search-hidden');
        } else if (searchField.value && !name.toLowerCase().includes(`${searchField.value.toLowerCase()}`)) {
            card.classList.add('search-hidden');
        } else if (!searchField.value) {
            card.classList.remove('search-hidden');
        }
    });
}
