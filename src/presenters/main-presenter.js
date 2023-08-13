import { render } from '../render.js';
import ListSortsView from '../view/list-sort-view.js';
import ListEventView from '../view/list-event-view.js';
import ItemEventView from '../view/item-event-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class MainPresenter {
  listSort = new ListSortsView();
  listEvents = new ListEventView();

  constructor({ viewContainer }) {
    this.viewContainer = viewContainer;
  }

  init() {
    render(this.listSort, this.viewContainer);
    render(this.listEvents, this.viewContainer);
    render(new EditPointView(), this.listEvents.getElement());

    for (let i = 0; i < 3; i++) {
      render(new ItemEventView(), this.listEvents.getElement());
    }
  }
}
