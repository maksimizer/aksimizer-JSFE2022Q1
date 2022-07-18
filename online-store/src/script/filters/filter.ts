import { data } from '../data';
import { Boat } from '../../types/index';
// import { sliderQuantity, sliderSize } from './setfilters/range_filters';
import { getLocalStorage } from './localstorage';
// import { select } from './setfilters/sort';
// import { clearBtn, searchField } from './setfilters/search';

export let filteredData: Boat[] = [];

// export function addListenersToGetLocalStorage() {
//     sliderSize.noUiSlider?.on('update', localStorage.getLocalStorage);
//     sliderQuantity.noUiSlider?.on('update', localStorage.getLocalStorage);
//     select.addEventListener('change', localStorage.getLocalStorage);
//     searchField.addEventListener('keyup', localStorage.getLocalStorage);
//     clearBtn.addEventListener('click', localStorage.getLocalStorage);
//     document.querySelectorAll('.button1').forEach((button) => {
//         button.addEventListener('click', localStorage.getLocalStorage);
//     });
//     document.querySelectorAll('.button2').forEach((button) => {
//         button.addEventListener('click', localStorage.getLocalStorage);
//     });
//     document.querySelectorAll('.color-button').forEach((button) => {
//         button.addEventListener('click', localStorage.getLocalStorage);
//     });
//     const popularBtn = document.querySelector('.favorite-button') as HTMLElement;
//     popularBtn.addEventListener('click', localStorage.getLocalStorage);
// }

export function filterData() {
    getLocalStorage();
    filteredData = data.filter((boat) => {
        const fitByProducer =
            localStorage.valueFilters.producer.length == 0 ||
            localStorage.valueFilters.producer.includes(boat.producer);
        const fitBySeats =
            localStorage.valueFilters.seats.length == 0 || localStorage.valueFilters.seats.includes(boat.seats);
        const fitByColor =
            localStorage.valueFilters.color.length == 0 || localStorage.valueFilters.color.includes(boat.color);
        const fitByPopular =
            localStorage.valueFilters.popular === false ||
            (localStorage.valueFilters.popular === true && localStorage.valueFilters.popular === boat.favorite);
        const fitByQuantity =
            (localStorage.rangeFilters.quantity[0] == '0' && localStorage.rangeFilters.quantity[1] == '10') ||
            (localStorage.rangeFilters.quantity[0] <= boat.quantity &&
                localStorage.rangeFilters.quantity[1] >= boat.quantity);
        const fitBySize =
            (localStorage.rangeFilters.size[0] == '250' && localStorage.rangeFilters.size[1] == '330') ||
            (localStorage.rangeFilters.size[0] <= boat.size && localStorage.rangeFilters.size[1] >= boat.size);
        const fitBySearch =
            localStorage.search == undefined || boat.name.toLowerCase().includes(localStorage.search.toLowerCase());
        return fitByProducer && fitBySeats && fitByColor && fitByPopular && fitByQuantity && fitBySize && fitBySearch;
    });
    switch (localStorage.sort) {
        case 'A-Z':
            filteredData.sort(function (a, b) {
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
            filteredData.sort(function (a, b) {
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
            filteredData.sort(function (a, b) {
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
            filteredData.sort(function (a, b) {
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
    return filteredData;
}
