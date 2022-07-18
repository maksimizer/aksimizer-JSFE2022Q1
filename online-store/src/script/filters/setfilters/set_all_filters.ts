import { setRangeFilters } from './range_filters';
import { setValueFilters } from './value_filters';
import { setSort } from './sort';
import { setSearch } from './search';

export function setFilters() {
    setValueFilters();
    setRangeFilters();
    setSort();
    setSearch();
}
