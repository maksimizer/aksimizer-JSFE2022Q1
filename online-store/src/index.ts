import Sliders from './js/sliders';
import './global.css';
import './style/filters.css';
import { sortData } from './js/sort';

const sliders = new Sliders();
sliders.draw;

sortData();
