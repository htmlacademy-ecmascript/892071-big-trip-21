import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import ListEventsView from '../view/list-events-view.js';
import ItemEventView from '../view/item-view.js';
import AddNewPointView from '../view/add-new-point-view.js';

export default class MainPresenter {
  listSort = new SortView();
  listEvents = new ListEventsView();

  constructor({ eventsContainer, pointModel, offerModel, destinationModel }) {
    this.eventsContainer = eventsContainer;
    this.pointModel = pointModel;
    this.offerModel = offerModel;
    this.destinationModel = destinationModel;
  }

  init() {
    this.pointsList = [...this.pointModel.getPoints()];
    this.offersList = [...this.offerModel.getOffers()];
    this.destinationsList = [...this.destinationModel.getDestinations()];

    render(this.listSort, this.eventsContainer);
    render(this.listEvents, this.eventsContainer);

    render(new AddNewPointView({ point: this.pointsList[0], offers: this.offerModel.getOffersByType(this.pointsList[0].type), destination: this.destinationModel.getById(this.pointsList[0].id) }), this.listEvents.getElement());

    this.pointsList.slice(1).forEach((event) => {
      render(new ItemEventView({point: event, offers: this.offerModel.getOffersByType(event.type), destination: this.destinationModel.getById(event.id)}), this.listEvents.getElement());
    })
  };
}
