export function addSearch() {
    getStoragedValue();
    searchField.addEventListener('keyup', search);
    clearBtn.addEventListener('click', clearSearchField);
}

const searchField = document.querySelector('.search') as HTMLInputElement;
const clearBtn = document.querySelector('.clear-search-button') as HTMLInputElement;
const noMatchesWarning = document.querySelector('.no-matches') as HTMLElement;

export function search() {
    const names = document.querySelectorAll('.item-name');
    let counter = 0;
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
        if (card.classList.contains('search-hidden')) {
            counter = counter + 1;
        }
        return counter;
    });
    counter === names.length ? noMatchesWarning.classList.remove('hidden') : noMatchesWarning.classList.add('hidden');
    localStorage.setItem('search', searchField.value);
}

function clearSearchField() {
    searchField.value = '';
    searchField.focus();
    search();
}

function getStoragedValue() {
    const storagedValue = localStorage.getItem('search');
    if (storagedValue) searchField.value = storagedValue;
    search();
}
