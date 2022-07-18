import { ValueFilters } from '../../../types/index';

export let valueFilters: ValueFilters = {
    producer: [],
    seats: [],
    color: [],
    popular: false,
};

function getValueFilters() {
    const valueFiltersStr = localStorage.getItem('valueFilters');
    if (valueFiltersStr) {
        valueFilters = JSON.parse(valueFiltersStr);
    }
    return valueFilters;
}

export function setValueFilters() {
    getValueFilters();
    localStorage.setItem('valueFilters', JSON.stringify(valueFilters));
    const storagedStr = localStorage.getItem('valueFilters');
    if (storagedStr) {
        valueFilters = JSON.parse(storagedStr);
    }
    document.querySelectorAll('.button1').forEach((button) => {
        const value = button.textContent as string;
        if (valueFilters.producer.includes(value)) {
            button.classList.add('button1-active');
        }
    });
    document.querySelectorAll('.button2').forEach((button) => {
        const value = button.textContent as string;
        if (valueFilters.seats.includes(value)) {
            button.classList.add('button2-active');
        }
    });
    document.querySelectorAll('.color-button').forEach((button) => {
        const value = button.textContent as string;
        if (valueFilters.color.includes(value)) {
            button.classList.add('color-button-active');
        }
    });
    if (valueFilters.popular === true) {
        (document.querySelector('.favorite-button') as HTMLElement).classList.add('favorite-button-active');
    }
    getValueFiltersValues();
}

function getValueFiltersValues() {
    document.querySelectorAll('.button1').forEach((button) => {
        button.addEventListener('click', setProducerFilter);
        function setProducerFilter() {
            if (!button.classList.contains('button1-active')) {
                button.classList.add('button1-active');
                if (button.textContent) valueFilters.producer.push(button.textContent);
            } else {
                button.classList.remove('button1-active');
                const index = valueFilters.producer.indexOf(`${button.textContent}`);
                valueFilters.producer.splice(index, 1);
            }
            localStorage.setItem('valueFilters', JSON.stringify(valueFilters));
        }
    });

    document.querySelectorAll('.button2').forEach((button) => {
        button.addEventListener('click', setSeatsFilter);
        function setSeatsFilter() {
            if (!button.classList.contains('button2-active')) {
                button.classList.add('button2-active');
                if (button.textContent) valueFilters.seats.push(button.textContent);
            } else {
                button.classList.remove('button2-active');
                const index = valueFilters.seats.indexOf(`${button.textContent}`);
                valueFilters.seats.splice(index, 1);
            }
            localStorage.setItem('valueFilters', JSON.stringify(valueFilters));
        }
    });

    document.querySelectorAll('.color-button').forEach((button) => {
        button.addEventListener('click', setColorFilter);
        function setColorFilter() {
            if (!button.classList.contains('color-button-active')) {
                button.classList.add('color-button-active');
                if (button.textContent) valueFilters.color.push(button.textContent);
            } else {
                button.classList.remove('color-button-active');
                const index = valueFilters.color.indexOf(`${button.textContent}`);
                valueFilters.color.splice(index, 1);
            }
            localStorage.setItem('valueFilters', JSON.stringify(valueFilters));
        }
    });

    const popularButton = document.querySelector('.favorite-button') as HTMLElement;
    popularButton.addEventListener('click', setPopularFilter);
    function setPopularFilter() {
        if (!popularButton.classList.contains('favorite-button-active')) {
            popularButton.classList.add('favorite-button-active');
            valueFilters.popular = true;
        } else {
            popularButton.classList.remove('favorite-button-active');
            valueFilters.popular = false;
        }
        localStorage.setItem('valueFilters', JSON.stringify(valueFilters));
    }
}
