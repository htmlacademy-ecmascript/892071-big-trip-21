import { render, RenderPosition } from './framework/render.js';
import FiltersView from './view/filters-view.js';
import MainPresenter from './presenters/main-presenter.js';
import TripInfoView from './view/trip-info-view.js';
import PointModel from './model/point-model.js';
import OfferModel from './model/offer-model.js';
import DestinationModel from './model/destination-model.js';

const headerContainer = document.querySelector('.page-header');
const mainContainer = document.querySelector('.page-main');

const tripInfoContainer = headerContainer.querySelector('.trip-main');
const filtersContainer = tripInfoContainer.querySelector('.trip-controls__filters');
const tripEventsContainer = mainContainer.querySelector('.trip-events');

const pointModel = new PointModel();
const offerModel = new OfferModel();
const destinationModel = new DestinationModel();

const mainPresenter = new MainPresenter({
  eventsContainer: tripEventsContainer,
  pointModel,
  offerModel,
  destinationModel
});

render(new TripInfoView(), tripInfoContainer, RenderPosition.AFTERBEGIN);
render(new FiltersView(), filtersContainer);

mainPresenter.init();
