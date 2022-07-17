import { RangeFilters } from '../../../types/index';
import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';

export const rangeFilters: RangeFilters = {
    size: [],
    quantity: [],
};

const sliderSize = document.querySelector('.size-slider') as noUiSlider.target;
const sliderQuantity = document.querySelector('.quantity-slider') as noUiSlider.target;

export function setRangeFilters() {
    sliderSize.noUiSlider?.on('update', getRangeValues);
    sliderQuantity.noUiSlider?.on('update', getRangeValues);
    localStorage.setItem('rangeFilters', JSON.stringify(rangeFilters));
}

function getRangeValues() {
    const sizeMin = (document.querySelector('.size-value-min') as HTMLElement).textContent;
    const sizeMax = (document.querySelector('.size-value-max') as HTMLElement).textContent;
    if (sizeMin) {
        rangeFilters.size[0] = sizeMin;
    }
    if (sizeMax) {
        rangeFilters.size[1] = sizeMax;
    }

    const quantityMin = (document.querySelector('.quantity-value-min') as HTMLElement).textContent;
    const quantityMax = (document.querySelector('.quantity-value-max') as HTMLElement).textContent;
    if (quantityMin) {
        rangeFilters.quantity[0] = quantityMin;
    }
    if (quantityMax) {
        rangeFilters.quantity[1] = quantityMax;
    }
}
