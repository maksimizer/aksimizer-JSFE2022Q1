import 'nouislider/dist/nouislider.css';
import './global.css';
import './style/filters.css';
import './style/products.css';
import * as noUiSlider from 'nouislider';

const sliderSize = document.querySelector('.size-slider') as noUiSlider.target;
noUiSlider.create(sliderSize, {
    start: [250, 330],
    step: 10,
    connect: true,
    range: {
        min: 250,
        max: 330,
    },
    format: {
        to: function (value) {
            return Math.trunc(value);
        },
        from: function (value) {
            return Number(value);
        },
    },
});

sliderSize.noUiSlider?.on('update', function (values, handle) {
    const sizeValuesDivs = [document.querySelector('.size-value-min'), document.querySelector('.size-value-max')];
    (sizeValuesDivs[handle] as HTMLElement).innerHTML = values[handle] as string;
});

const sliderQuantity = document.querySelector('.quantity-slider') as noUiSlider.target;

noUiSlider.create(sliderQuantity, {
    start: [0, 20],
    step: 1,
    connect: true,
    range: {
        min: 0,
        max: 10,
    },
    format: {
        to: function (value) {
            return Math.trunc(value);
        },
        from: function (value) {
            return Number(value);
        },
    },
});

sliderQuantity.noUiSlider?.on('update', function (values, handle) {
    const quantityValuesDivs = [
        document.querySelector('.quantity-value-min'),
        document.querySelector('.quantity-value-max'),
    ];
    (quantityValuesDivs[handle] as HTMLElement).innerHTML = values[handle] as string;
});
