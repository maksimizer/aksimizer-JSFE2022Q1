export let sort: string;

export const select = document.querySelector('.sort') as HTMLSelectElement;

export function setSort() {
    getSort();
    getSortValue();
    select.addEventListener('change', getSortValue);
}

export function getSort() {
    const storagedValue = localStorage.getItem('sort');
    if (storagedValue) {
        sort = storagedValue;
        select.value = sort;
    }
    return sort;
}

function getSortValue() {
    localStorage.setItem('sort', select.value);
    sort = select.value;
}
