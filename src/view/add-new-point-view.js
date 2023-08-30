import { createElement } from '../render.js';
import { formatDefaultEventStringToTime } from './../utils.js';
import { EVENT_CATEGORIES } from './../constants.js';

const DEFAULT_EVENT = {
  id: '1',
  basePrice: 112,
  dateFrom: new Date('2023-09-02T12:00:00'),
  dateTo: new Date('2023-09-12T12:00:00'),
  destination: '',
  isFavorite: true,
  offers: [6],
  type: 'Restaurant',
};

function createOffersListTemplate(list) {
  if (list.length === 0) {
    return '';
  }
  return list.map((offer) => `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.type}-1" type="checkbox" name="event-offer-${offer.type}">
      <label class="event__offer-label" for="event-offer-${offer.type}-1">
        <span class="event__offer-title">${offer.offers.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.offers.price}</span>
      </label>
    </div>
  `);
}

function createTypeList(list) {
  return list.map((item) => `
    <div class="event__type-item">
      <input id="event-type-${item.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.toLowerCase()}">
      <label class="event__type-label event__type-label--${item.toLowerCase()}" for="event-type-taxi-1">${item}</label>
    </div>
  `).join('');
}

function createImageList(list) {
  return list.map((img) => `
    <img class="event__photo" src="${img.src}" alt="${img.description}"></img>
  `).join('');
}

function createAddNewPointTemplate(event, offersList, destination, isEditMode) {
  const { type, dateFrom, dateTo, basePrice } = event;
  const dateStart = formatDefaultEventStringToTime(dateFrom);
  const dateEnd = formatDefaultEventStringToTime(dateTo);

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createTypeList(EVENT_CATEGORIES)}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination ? destination.name : ''}" list="destination-list-1">
            <datalist id="destination-list-1">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateStart}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateEnd}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              ${createOffersListTemplate(offersList)}
            </div>
          </section>

          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${destination ? destination.description : ''}</p>

            ${!isEditMode ? `
              <div class="event__photos-container">
                <div class="event__photos-tape">
                  ${destination ? createImageList(destination.pictures) : ''}
                </div>
              </div>
            ` : ''}

          </section>
        </section>
      </form>
    </li>
  `;
}

export default class AddNewPointView {
  constructor({event = DEFAULT_EVENT, offers, destination, isEditMode = false}) {
    this.event = event;
    this.offers = offers;
    this.destination = destination;
    this.isEditMode = isEditMode;
  }

  getTemplate() {
    return createAddNewPointTemplate(this.event, this.offers, this.destination, this.isEditMode);
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
