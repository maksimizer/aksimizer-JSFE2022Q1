import { RangeFilters } from '../../../types/index';
import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';

export let rangeFilters: RangeFilters = {
    size: [],
    quantity: [],
};

export const sliderSize = document.querySelector('.size-slider') as noUiSlider.target;
export const sliderQuantity = document.querySelector('.quantity-slider') as noUiSlider.target;

export function getRangeFilters() {
    const rangeFiltersStr = localStorage.getItem('rangeFilters');
    if (rangeFiltersStr) {
        rangeFilters = JSON.parse(rangeFiltersStr);
    }
    sliderSize.noUiSlider?.set(rangeFilters.size);
    sliderQuantity.noUiSlider?.set(rangeFilters.quantity);
    return rangeFilters;
}

export function setRangeFilters() {
    getRangeFilters();
    sliderSize.noUiSlider?.on('update', getRangeValues);
    sliderQuantity.noUiSlider?.on('update', getRangeValues);
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
    localStorage.setItem('rangeFilters', JSON.stringify(rangeFilters));
}
