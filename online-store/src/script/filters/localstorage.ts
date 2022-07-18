import { getValueFilters } from './setfilters/value_filters';
import { getRangeFilters } from './setfilters/range_filters';
import { getSearch } from './setfilters/search';
import { getSort } from './setfilters/sort';

export function getLocalStorage() {
    getValueFilters();
    getRangeFilters();
    getSearch();
    getSort();
}
