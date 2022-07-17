export function addClearStorage() {
    (document.querySelector('.clear-storage') as HTMLElement).addEventListener('click', clearStorage);
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}
