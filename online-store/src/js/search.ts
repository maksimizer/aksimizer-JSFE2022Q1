export function addSearch() {
    searchField.addEventListener('keyup', search);
    clearBtn.addEventListener('click', clearSearchField);
}

const searchField = document.querySelector('.search') as HTMLInputElement;
const clearBtn = document.querySelector('.clear-search-button') as HTMLInputElement;

export function search() {
    const names = document.querySelectorAll('.item-name');
    names.forEach((el) => {
        const name = el.textContent as string;
        const card = el.parentElement as HTMLElement;
        if (searchField.value && name.toLowerCase().includes(`${searchField.value.toLowerCase()}`)) {
            card.classList.remove('search-hidden');
            clearBtn.classList.remove('hidden');
            searchField.style.backgroundImage = 'none';
        } else if (searchField.value && !name.toLowerCase().includes(`${searchField.value.toLowerCase()}`)) {
            card.classList.add('search-hidden');
            clearBtn.classList.remove('hidden');
            searchField.style.backgroundImage = 'none';
        } else if (!searchField.value) {
            card.classList.remove('search-hidden');
            clearBtn.classList.add('hidden');
            searchField.style.backgroundImage = 'url(./assets/img/search.svg)';
        }
    });
}

function clearSearchField() {
    searchField.value = '';
    searchField.focus();
    search();
}
