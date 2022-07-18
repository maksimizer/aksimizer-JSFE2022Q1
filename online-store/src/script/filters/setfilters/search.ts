export let search: string;

export const searchField = document.querySelector('.search') as HTMLInputElement;
export const clearBtn = document.querySelector('.clear-search-button') as HTMLInputElement;

export function setSearch() {
    getSearch();
    getSearchString();
    searchField.addEventListener('keyup', getSearchString);
    clearBtn.addEventListener('click', clearSearchString);
}

export function getSearch() {
    const storagedStr = localStorage.getItem('search');
    if (storagedStr) {
        search = storagedStr;
        searchField.value = search;
    }
    if (searchField.value === '') {
        clearBtn.classList.add('hidden');
        searchField.style.backgroundImage = 'url(./assets/img/search.svg)';
    } else {
        clearBtn.classList.remove('hidden');
        searchField.style.backgroundImage = 'none';
    }
    return search;
}

function getSearchString() {
    search = searchField.value;
    if (searchField.value === '') {
        clearBtn.classList.add('hidden');
        searchField.style.backgroundImage = 'url(./assets/img/search.svg)';
    } else {
        clearBtn.classList.remove('hidden');
        searchField.style.backgroundImage = 'none';
    }
    localStorage.setItem('search', search);
}

export function clearSearchString() {
    searchField.value = '';
    search = searchField.value;
    searchField.focus();
    if (searchField.value === '') {
        clearBtn.classList.add('hidden');
        searchField.style.backgroundImage = 'url(./assets/img/search.svg)';
    } else {
        clearBtn.classList.remove('hidden');
        searchField.style.backgroundImage = 'none';
    }
    localStorage.setItem('search', search);
}
