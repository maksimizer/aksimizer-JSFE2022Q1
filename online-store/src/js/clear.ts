export function addClearStorageEvent() {
    (document.querySelector('.clear-storage') as HTMLElement).addEventListener('click', clearStorage);
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}
