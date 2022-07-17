import { sliderSize } from './filters/setfilters/range_filters';
import { sliderQuantity } from './filters/setfilters/range_filters';
import { clearSearchString } from './filters/setfilters/search';

export function addResetBtnsFn() {
    (document.querySelector('.clear-storage') as HTMLElement).addEventListener('click', clearStorage);
    (document.querySelector('.clear-filters') as HTMLElement).addEventListener('click', clearFilters);
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}

function clearFilters() {
    sliderSize.noUiSlider?.reset();
    sliderQuantity.noUiSlider?.reset();
    clearSearchString();
    localStorage.removeItem('valueFilters');
    location.reload();
}
