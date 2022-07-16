import Sliders from './js/sliders';
import './global.css';
import './style/filters.css';
import * as sort from './js/sort';
import * as clear from './js/clear';
import * as search from './js/search';

const sliders = new Sliders();
sliders.draw;

clear.addClearStorage();
search.addSearch();

sort.getStoragedValue();
sort.sortData();
