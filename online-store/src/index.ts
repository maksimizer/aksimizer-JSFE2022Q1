import Sliders from './script/sliders';
import './global.css';
import './style/filters.css';
import { addResetBtnsFn } from './script/clear';
import { setRangeFilters } from './script/filters/setfilters/range_filters';
import { setValueFilters } from './script/filters/setfilters/value_filters';
import { setSort } from './script/filters/setfilters/sort';
import { setSearch } from './script/filters/setfilters/search';

const sliders = new Sliders();
sliders.draw;

addResetBtnsFn();

setValueFilters();
setRangeFilters();
setSort();
setSearch();
