import Sliders from './script/sliders';
import './global.css';
import './style/filters.css';
import { addResetBtnsFn } from './script/clear';
import { setFilters } from './script/filters/setfilters/set_all_filters';
import { addListenersToCreateCards } from './script/cards';

const sliders = new Sliders();
sliders.draw;

addResetBtnsFn();
setFilters();
addListenersToCreateCards();
