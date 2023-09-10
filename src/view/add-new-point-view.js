import { formatDefaultEventStringToTime } from './../utils.js';
import { EVENT_TYPES } from './../constants.js';
import AbstractView from './../framework/view/abstract-view.js';

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

function createOffersListTemplate(offers, type) {
  if (offers.length === 0) {
    return '';
  }

  return offers.map((currentoffer, index) => `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${index}" type="checkbox" name="event-offer-${type}">
      <label class="event__offer-label" for="event-offer-${type}-${index}">
        <span class="event__offer-title">${currentoffer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${currentoffer.price}</span>
      </label>
    </div>
  `).join('');
}

function createTypeList(types) {
  return types.map((type, index) => `
    <div class="event__type-item">
      <input id="event-type-${type.toLowerCase()}-${index}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}">
      <label class="event__type-label event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-${index}">${type}</label>
    </div>
  `).join('');
}

function createImageList(images) {
  return images.map((img) => `
    <img class="event__photo" src="${img.src}" alt="${img.description}"></img>
  `).join('');
}

function createAddNewPointTemplate(point, offers, destination, isEditMode) {
  const { type, dateFrom, dateTo, basePrice } = point;
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
                ${createTypeList(EVENT_TYPES)}
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
          ${isEditMode ? `<button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>` : ''}

        </header>

        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              ${createOffersListTemplate(offers, type)}
            </div>
          </section>

          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${destination ? destination.description : ''}</p>

            <div class="event__photos-container">
              <div class="event__photos-tape">
                ${destination ? createImageList(destination.pictures) : ''}
              </div>
            </div>

          </section>
        </section>
      </form>
    </li>
  `;
}

export default class AddNewPointView extends AbstractView {
  #point = null;
  #offers = null;
  #destination = null;
  #isEditMode = null;
  #onResetClick = null;
  #onSubmitClick = null;


  constructor({point, offers, destination, isEditMode = true, onResetClick, onSubmitClick}) {
    super();
    this.#point = isEditMode ? point : DEFAULT_EVENT;
    this.#offers = offers;
    this.#destination = destination;
    this.#isEditMode = isEditMode;
    this.#onResetClick = onResetClick;
    this.#onSubmitClick = onSubmitClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#resetButtonClickHandler);
    this.element.querySelector('form').addEventListener('submit', this.#submitFormHandler);
  }

  get template() {
    return createAddNewPointTemplate(this.#point, this.#offers, this.#destination, this.#isEditMode);
  }

  #resetButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onResetClick();
  };

  #submitFormHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitClick();
  };
}
