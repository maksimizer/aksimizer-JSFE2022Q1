import '../style/cards.css';
import { Boat } from '../types/index';

export function createCards(data: Boat[]): void {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const cardTemplate = document.querySelector('#card-template') as HTMLTemplateElement;

    data.forEach((item) => {
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
        (cardClone.querySelector(
            '.cart-button'
        ) as HTMLElement).style.backgroundImage = `url('./assets/img/add_cart.svg')`;
        fragment.append(cardClone);
    });

    (document.querySelector('.cards-container') as HTMLElement).innerHTML = '';
    (document.querySelector('.cards-container') as HTMLElement).append(fragment);
}
