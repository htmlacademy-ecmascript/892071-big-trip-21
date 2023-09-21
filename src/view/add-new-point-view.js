import { formatDefaultEventStringToTime } from '../utils/point.js';
import { EVENT_TYPES } from '../constants.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { modifyStringToCapitalize } from '../utils/common.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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

function createOptionsDestinationList(destinations) {
  return destinations.destinations.map((dest) => `<option value="${dest.name}">${dest.name}</option>`).join('');
}

function createOffersListTemplate(offers, type) {
  const filteredOffers = offers.getOffersByType(type);
  if (filteredOffers.length === 0) {
    return '';
  }

  return (`
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${filteredOffers.map((currentoffer, index) => `
          <div class="event__offer-selector">
            <input class="event__offer-checkbox visually-hidden" data-offer-id=${currentoffer.id} id="event-offer-${type.toLowerCase()}-${index + 1}" type="checkbox" name="event-offer-${type}">
            <label class="event__offer-label" for="event-offer-${type.toLowerCase()}-${index + 1}">
              <span class="event__offer-title">${currentoffer.title}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${currentoffer.price}</span>
            </label>
          </div>
        `).join('')}
      </div>
    </section>
  `);
}

function createTypeList(types, currentType) {

  return types.map((type, index) => `
    <div class="event__type-item">
      <input id="event-type-${type}-${index + 1}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${currentType === type ? 'checked' : ''}>
      <label class="event__type-label event__type-label--${type}" for="event-type-${type}-${index + 1}">${modifyStringToCapitalize(type)}</label>
    </div>
  `).join('');
}

function createDestinationTemplate(currentDestination) {
  if (!currentDestination.description && !currentDestination.pictures.length) {
    return '';
  }

  return (`
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${currentDestination.description}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${currentDestination.pictures.length !== 0 ? createImageList(currentDestination.pictures) : ''}
        </div>
      </div>

    </section>
  `);
}

function createImageList(images) {
  return images.map((img) => `
    <img class="event__photo" src="${img.src}" alt="${img.description}"></img>
  `).join('');
}

function createAddNewPointTemplate(state, offers, destinations, isEditMode) {
  const { point } = state;

  const dateStart = formatDefaultEventStringToTime(point.dateFrom);
  const dateEnd = formatDefaultEventStringToTime(point.dateTo);
  const currentDestination = destinations.getById(point.destination);

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createTypeList(EVENT_TYPES, point.type)}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${point.type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${currentDestination.name}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${createOptionsDestinationList(destinations)}
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
            <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${point.basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">${isEditMode ? 'Delete' : 'Cancel'}</button>

          ${isEditMode ? `<button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>` : ''}

        </header>

        <section class="event__details">
          ${createOffersListTemplate(offers, point.type)}
          ${createDestinationTemplate(currentDestination)}
        </section>
      </form>
    </li>
  `;
}

export default class AddNewPointView extends AbstractStatefulView {
  #offers = [];
  #destinations = null;
  #isEditMode = null;
  #onResetClick = null;
  #onSubmitClick = null;
  #datePickerFrom = null;
  #datePickerTo = null;

  constructor({point = DEFAULT_EVENT, offers, destinations, isEditMode = true, onResetClick, onSubmitClick}) {
    super();
    this.#offers = offers;
    this.#destinations = destinations;
    this.#isEditMode = isEditMode;
    this.#onResetClick = onResetClick;
    this.#onSubmitClick = onSubmitClick;

    this._setState(AddNewPointView.parsePointToState({point}));

    this._restoreHandlers();
  }

  get template() {
    return createAddNewPointTemplate(this._state, this.#offers, this.#destinations, this.#isEditMode);
  }

  reset = (point) => {
    this.updateElement({point});
  };

  removeElement = () => {
    super.removeElement();

    if (this.#datePickerFrom) {
      this.#datePickerFrom.destroy();
      this.#datePickerFrom = null;
    }

    if (this.#datePickerTo) {
      this.#datePickerTo.destroy();
      this.#datePickerTo = null;
    }
  };

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#resetButtonClickHandler);
    this.element.querySelector('form').addEventListener('submit', this.#submitFormHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__input--price').addEventListener('change', this.#priceChangeHandler);
    this.element.querySelector('.event__available-offers')?.addEventListener('change', this.#offerChangeHandler);
    this.#setDatePicker();
  }

  #resetButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onResetClick();
  };

  #submitFormHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitClick(AddNewPointView.parseStateToPoint(this._state));
  };

  #typeChangeHandler = (evt) => {
    this.updateElement({
      point: {
        ...this._state.point,
        type: evt.target.value,
        offers: [],
      }
    });
  };

  #destinationChangeHandler = (evt) => {
    const selectedDestination = this.#destinations.destinations.find((dest) => dest.name === evt.target.value);
    if (!selectedDestination) {
      return;
    }

    this.updateElement({
      point: {
        ...this._state.point,
        destination: selectedDestination.id ? selectedDestination.id : null
      }
    });
  };

  #offerChangeHandler = () => {
    const checkedInputs = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));

    this._setState({
      point: {
        ...this._state.point,
        offers: checkedInputs.map((element) => element.dataset.offerId)
      }
    });
  };

  #priceChangeHandler = (evt) => {
    this._setState({
      point: {
        ...this._state.point,
        basePrice: parseInt(evt.target.value, 10)
      }
    });
  };

  #dateFromCloseHandler = ([userDate]) => {
    this._setState({
      point: {
        ...this._state.point,
        dateFrom: userDate
      }
    });
    this.#datePickerTo.set('minDate', this._state.point.dateFrom);
  };

  #dateToCloseHandler = ([userDate]) => {
    this._setState({
      point: {
        ...this._state.point,
        dateTo: userDate
      }
    });
    this.#datePickerFrom.set('minDate', this._state.point.dateTo);
  };

  #setDatePicker() {
    const [dateFromElement, dateToElement] = this.element.querySelectorAll('.event__input--time');
    const commonConfig = {
      dateFormat: 'd/m/y H:i',
      enableTime: true,
      locate: {
        firstDayOfWeek: 1
      },
      'time_24hr' : true
    };

    this.#datePickerFrom = flatpickr(
      dateFromElement,
      {
        ...commonConfig,
        defaultDate: this._state.point.dateFrom,
        maxDate: this._state.point.dateTo,
        onClose: this.#dateFromCloseHandler,
      }
    );

    this.#datePickerTo = flatpickr(
      dateToElement,
      {
        ...commonConfig,
        defaultDate: this._state.point.dateTo,
        minDate: this._state.point.dateFrom,
        onClose: this.#dateToCloseHandler,
      }
    );
  }

  static parsePointToState = ({point}) => ({point});

  static parseStateToPoint = (state) => state.point;
}
