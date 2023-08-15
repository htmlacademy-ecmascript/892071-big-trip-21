import { createElement } from '../render.js';

function createListEventsTamplate() {
  return `
    <ul class="trip-events__list"></ul>
  `;
}

export default class ListEventsView {
  getTemplate() {
    return createListEventsTamplate();
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
