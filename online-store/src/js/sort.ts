import { data } from './data';
import { createCards } from './cards';

export function sortData() {
    const select = document.querySelector('.sort') as HTMLSelectElement;
    select.addEventListener('change', sortData);
    localStorage.setItem('sort', `${select.value}`);
    switch (select.value) {
        case 'A-Z':
            data.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'Z-A':
            data.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'quantity+':
            data.sort(function (a, b) {
                if (a.quantity > b.quantity) {
                    return 1;
                }
                if (a.quantity < b.quantity) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'quantity-':
            data.sort(function (a, b) {
                if (a.quantity < b.quantity) {
                    return 1;
                }
                if (a.quantity > b.quantity) {
                    return -1;
                }
                return 0;
            });
            break;
    }
    createCards(data);
}
