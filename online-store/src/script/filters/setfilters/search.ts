let search: string;

const searchField = document.querySelector('.search') as HTMLInputElement;
const clearBtn = document.querySelector('.clear-search-button') as HTMLInputElement;

export function setSearch() {
    getStoragedValue();
    searchField.addEventListener('keyup', getSearchString);
    clearBtn.addEventListener('click', clearSearchString);
}

function getStoragedValue() {
    const storagedValue = localStorage.getItem('search');
    if (storagedValue) searchField.value = storagedValue;
    if (searchField.value === '') {
        clearBtn.classList.add('hidden');
        searchField.style.backgroundImage = 'url(./assets/img/search.svg)';
    } else {
        clearBtn.classList.remove('hidden');
        searchField.style.backgroundImage = 'none';
    }
}

function getSearchString() {
    search = searchField.value;
    localStorage.setItem('search', search);
    if (searchField.value === '') {
        clearBtn.classList.add('hidden');
        searchField.style.backgroundImage = 'url(./assets/img/search.svg)';
    } else {
        clearBtn.classList.remove('hidden');
        searchField.style.backgroundImage = 'none';
    }
}

function clearSearchString() {
    searchField.value = '';
    search = searchField.value;
    searchField.focus();
    localStorage.setItem('search', search);
    if (searchField.value === '') {
        clearBtn.classList.add('hidden');
        searchField.style.backgroundImage = 'url(./assets/img/search.svg)';
    } else {
        clearBtn.classList.remove('hidden');
        searchField.style.backgroundImage = 'none';
    }
}
