import Sliders from './js/sliders';
import './global.css';
import './style/filters.css';
import * as sort from './js/sort';

const sliders = new Sliders();
sliders.draw;

sort.getStoragedValue();
sort.sortData();
