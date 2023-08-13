import { render, RenderPosition } from './render.js';
import ListFiltersView from './view/list-filters-view.js';
import MainPresenter from './presenters/main-presenter.js';
import TripInfoView from './view/trip-info-view.js';

const headerContainer = document.querySelector('.page-header');
const mainContainer = document.querySelector('.page-main');

const tripInfoContainer = headerContainer.querySelector('.trip-main');
const filtersContainer = tripInfoContainer.querySelector('.trip-controls__filters');
const eventContainer = mainContainer.querySelector('.trip-events');

const mainPresenter = new MainPresenter({viewContainer: eventContainer});

render(new TripInfoView(), tripInfoContainer, RenderPosition.AFTERBEGIN);
render(new ListFiltersView(), filtersContainer);

mainPresenter.init();
