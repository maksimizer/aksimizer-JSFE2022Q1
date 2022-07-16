import Sliders from './js/sliders';
import './global.css';
import './style/filters.css';
import * as sort from './js/sort';
import * as clear from './js/clear';

const sliders = new Sliders();
sliders.draw;

clear.addClearStorageEvent();

sort.getStoragedValue();
sort.sortData();
