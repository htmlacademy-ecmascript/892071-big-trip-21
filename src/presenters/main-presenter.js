import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import ListEventsView from '../view/list-events-view.js';
import ItemEventView from '../view/item-view.js';
import EditPointView from '../view/edit-point-view.js';

const TRIP_ITEM_COUNT = 3;

export default class MainPresenter {
  listSort = new SortView();
  listEvents = new ListEventsView();

  constructor({ eventsContainer }) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(this.listSort, this.eventsContainer);
    render(this.listEvents, this.eventsContainer);
    render(new EditPointView(), this.listEvents.getElement());

    for (let i = 0; i < TRIP_ITEM_COUNT; i++) {
      render(new ItemEventView(), this.listEvents.getElement());
    }
  }
}
