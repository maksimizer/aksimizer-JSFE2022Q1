import { data } from './data';

export const sortedData = data;
const select = document.querySelector('.sort') as HTMLSelectElement;
select.addEventListener('change', sortData);
export function sortData() {
    switch (select.value) {
        case 'A-Z':
            sortedData.sort(function (a, b) {
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
            sortedData.sort(function (a, b) {
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
            sortedData.sort(function (a, b) {
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
            sortedData.sort(function (a, b) {
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
}
