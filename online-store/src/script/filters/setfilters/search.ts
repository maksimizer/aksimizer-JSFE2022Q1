let search: string;

const searchField = document.querySelector('.search') as HTMLInputElement;
const clearBtn = document.querySelector('.clear-search-button') as HTMLInputElement;

export function setSearch() {
    searchField.addEventListener('keyup', getSearchString);
    clearBtn.addEventListener('click', clearSearchString);
    function getSearchString() {
        search = searchField.value;
        console.log(search);
    }
    function clearSearchString() {
        searchField.value = '';
        search = searchField.value;
        console.log(search);
    }
}
