import { createElement } from '../render.js';

function createEventListTamplate() {
  return `
    <ul class="trip-events__list"></ul>
  `;
}

export default class ListEventView {
  getTemplate() {
    return createEventListTamplate();
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
