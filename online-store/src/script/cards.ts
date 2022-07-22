import '../style/cards.css';
import { sliderQuantity, sliderSize } from './filters/setfilters/range_filters';
import { select } from './filters/setfilters/sort';
import { clearBtn, searchField } from './filters/setfilters/search';
import { filteredData, filterData } from './filters/filter';
import { setAddedToCart } from './cart';

export function addListenersToCreateCards() {
    sliderSize.noUiSlider?.on('update', createCards);
    sliderQuantity.noUiSlider?.on('update', createCards);
    select.addEventListener('change', createCards);
    searchField.addEventListener('keyup', createCards);
    clearBtn.addEventListener('click', createCards);
    document.querySelectorAll('.button-producer').forEach((button) => {
        button.addEventListener('click', createCards);
    });
    document.querySelectorAll('.button-seats').forEach((button) => {
        button.addEventListener('click', createCards);
    });
    document.querySelectorAll('.color-button').forEach((button) => {
        button.addEventListener('click', createCards);
    });
    (document.querySelector('.favorite-button') as HTMLElement).addEventListener('click', createCards);
}

export function createCards() {
    filterData();
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const cardTemplate = document.querySelector('#card-template') as HTMLTemplateElement;
    filteredData.forEach((item) => {
        const cardClone = cardTemplate.content.cloneNode(true) as HTMLElement;
        (cardClone.querySelector(
            '.item-photo'
        ) as HTMLElement).style.backgroundImage = `url('./assets/img/goods/${item.num}.jpg')`;
        (cardClone.querySelector('.item-name') as HTMLElement).textContent = item.name;
        (cardClone.querySelector('.item-producer') as HTMLElement).textContent = `Производитель: ${item.producer}`;
        (cardClone.querySelector('.item-color') as HTMLElement).textContent = `Цвет: ${item.color}`;
        (cardClone.querySelector('.item-size') as HTMLElement).textContent = `Размер, см: ${item.size}`;
        (cardClone.querySelector('.item-seats') as HTMLElement).textContent = `Мест, чел.: ${item.seats}`;
        (cardClone.querySelector('.item-quantity') as HTMLElement).textContent = `В наличии, шт.: ${item.quantity}`;
        (cardClone.querySelector('.item-favorite') as HTMLElement).textContent = item.favorite
            ? 'Популярный'
            : 'Непопулярный';
        (cardClone.querySelector('.cart-button') as HTMLElement).textContent = item.num;
        fragment.append(cardClone);
    });

    (document.querySelector('.cards-container') as HTMLElement).innerHTML = '';
    (document.querySelector('.cards-container') as HTMLElement).append(fragment);
    setAddedToCart();
}
