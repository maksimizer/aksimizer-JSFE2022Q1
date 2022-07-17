export let sort: string;

export function setSort() {
    const select = document.querySelector('.sort') as HTMLSelectElement;
    select.addEventListener('change', getSort);
    function getSort() {
        sort = select.value;
        console.log(sort);
    }
}
