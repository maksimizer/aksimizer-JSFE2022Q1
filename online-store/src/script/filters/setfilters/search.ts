let search: string;

export const searchField = document.querySelector('.search') as HTMLInputElement;
export const clearBtn = document.querySelector('.clear-search-button') as HTMLInputElement;

export function setSearch() {
    getStoragedValue();
    searchField.addEventListener('keyup', getSearchString);
    clearBtn.addEventListener('click', clearSearchString);
    localStorage.setItem('search', searchField.value);
}

export function getStoragedValue() {
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

export function clearSearchString() {
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
