import { createElement } from '../render.js';
import { formatStringToDate, formatStringToTime, countTimeInterval } from './../utils.js';

function createOffersListTemplate(offers) {
    if (offers.length === 0) {
      return '';
    }

    for (let i = 0; i< offers.length; i++) {
      return (`<li class="event__offer">
          <span class="event__offer-title">${offers[i].offers.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offers[i].offers.price}</span>
        </li>`)
    }
}

function createItemEventTemplate(point, offers, destination) {
  const { type, dateFrom, dateTo, basePrice, isFavorite } = point;
  const dateStart = formatStringToDate(dateFrom);
  const timeStart = formatStringToTime(dateFrom);
  const timeEnd = formatStringToTime(dateTo);
  const timeInterval = countTimeInterval(dateFrom, dateTo);

  const addActiveClass = isFavorite ? 'event__favorite-btn--active' : '';

  return `
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateFrom}">${dateStart}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destination.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateFrom}">${timeStart}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTo}">${timeEnd}</time>
          </p>
          <p class="event__duration">${timeInterval}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
        ${createOffersListTemplate(offers)}
        </ul>
        <button class="event__favorite-btn ${addActiveClass}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
}

export default class ItemEventView {
  constructor({point, offers, destination}) {
    this.point = point;
    this.offers = offers;
    this.destination = destination;
  }

  getTemplate() {
    return createItemEventTemplate(this.point, this.offers, this.destination);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
