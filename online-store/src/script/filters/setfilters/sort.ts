let sort: string;

export const select = document.querySelector('.sort') as HTMLSelectElement;

export function setSort() {
    getStoragedValue();
    select.addEventListener('change', getSort);
    localStorage.setItem('sort', select.value);
}

function getSort() {
    sort = select.value;
    localStorage.setItem('sort', sort);
}

function getStoragedValue() {
    const storagedValue = localStorage.getItem('sort');
    if (storagedValue) select.value = storagedValue;
}
