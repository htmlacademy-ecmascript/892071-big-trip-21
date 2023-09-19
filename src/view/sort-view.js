import AbstractView from './../framework/view/abstract-view.js';

function createSortItemTemplate(types) {
  return types.map((typeItem) => `
    <div class="trip-sort__item  trip-sort__item--${typeItem.type}">
      <input id="sort-${typeItem.type}" class="trip-sort__input  visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-${typeItem.type}"
      ${typeItem.isChecked ? 'checked' : ''}
      ${typeItem.isDisabled ? 'disabled' : ''}
      data-sort-type="${typeItem.type}">
      <label class="trip-sort__btn" for="sort-${typeItem.type}">${typeItem.type}</label>
    </div>
  `).join('');
}

function createSortTemplate(types) {
  return `
    <form class="trip-events__trip-sort trip-sort" action="#" method="get">
      ${createSortItemTemplate(types)}
    </form>
  `;
}

export default class SortView extends AbstractView {
  #types = [];
  #handleSortTypeChange = null;

  constructor({types, onSortTypeChange}) {
    super();
    this.#types = types;
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#types);
  }

  #sortTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
