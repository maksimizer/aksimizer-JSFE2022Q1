import { ValueFilters, RangeFilters } from '../../types/index';

export let valueFilters: ValueFilters = {
    producer: [],
    seats: [],
    color: [],
    popular: false,
};
export let rangeFilters: RangeFilters = {
    size: [],
    quantity: [],
};
export let search: string;
export let sort: string;

function getValueFilters() {
    const valueFiltersStr = localStorage.getItem('valueFilters');
    if (valueFiltersStr) {
        valueFilters = JSON.parse(valueFiltersStr);
    }
    return valueFilters;
}

function getRangeFilters() {
    const rangeFiltersStr = localStorage.getItem('rangeFilters');
    if (rangeFiltersStr) {
        rangeFilters = JSON.parse(rangeFiltersStr);
    }
    return rangeFilters;
}

function getSearch() {
    const storagedStr = localStorage.getItem('search');
    if (storagedStr) {
        search = storagedStr;
    }
    return search;
}

function getSorth() {
    const storagedStr = localStorage.getItem('sort');
    if (storagedStr) {
        sort = storagedStr;
    }
    return sort;
}

export function getLocalStorage() {
    getValueFilters();
    getRangeFilters();
    getSearch();
    getSorth();
}
