import Sliders from './script/sliders';
import './global.css';
import './style/filters.css';
import * as sort from './script/sort';
import * as clear from './script/clear';
import * as search from './script/search';
import { setRangeFilters } from './script/filters/setfilters/range_filters';
import { setValueFilters } from './script/filters/setfilters/value_filters';

const sliders = new Sliders();
sliders.draw;

clear.addClearStorage();
search.addSearch();

sort.getStoragedValue();
sort.sortData();
setRangeFilters();
setValueFilters();
