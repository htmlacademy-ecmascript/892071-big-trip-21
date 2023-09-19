import { remove, render, replace, RenderPosition } from './../framework/render.js';
import SortView from '../view/sort-view.js';
import ListEventsView from '../view/list-events-view.js';
import EmptyListView from '../view/empty-list-view.js';
import PointPresenter from './point-presenter.js';
import { updatePoint } from './../utils/point.js';
import { sort } from './../utils/sort.js';
import { SortType, EnabledSortType } from './../constants.js';

export default class MainPresenter {
  #listSort = null;
  #listEvents = new ListEventsView();
  #emptyList = new EmptyListView();
  #eventsContainer = null;
  #pointModel = null;
  #offerModel = null;
  #destinationModel = null;

  #pointsList = [];
  #offersList = [];
  #destinationsList = [];

  #pointsPresenters = new Map();

  #currentSortType = SortType.DAY;

  constructor({ eventsContainer, pointModel, offerModel, destinationModel }) {
    this.#eventsContainer = eventsContainer;
    this.#pointModel = pointModel;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;

    this.#pointsList = sort[SortType.DAY](this.#pointModel.points);
  }

  init() {
    this.#renderBoard();
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointContainer: this.#listEvents.element,
      offerModel: this.#offerModel,
      destinationModel: this.#destinationModel,
      onDataChange: this.#pointChangeHandler,
      onModeChange: this.#modeChangeHandler
    });

    pointPresenter.init(point);
    this.#pointsPresenters.set(point.id, pointPresenter);
  }

  #modeChangeHandler = () => {
    this.#pointsPresenters.forEach((presenter) => presenter.resetView());
  };

  #pointChangeHandler = (updatedPoint) => {
    this.#pointsList = updatePoint(this.#pointsList, updatedPoint);
    this.#pointsPresenters.get(updatedPoint.id).init(updatedPoint, this.#offerModel, this.#destinationModel);
  };

  #renderContainer() {
    render(this.#listEvents, this.#eventsContainer);
  }

  #renderPoints() {
    this.#pointsList.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderEmptyList() {
    render(this.#emptyList, this.#eventsContainer);
  }

  #renderBoard() {
    if (this.#pointsList.length === 0) {
      this.#renderEmptyList();

      return;
    }

    this.#renderSort();
    this.#renderContainer();
    this.#renderPoints();
  }

  #clearPointList() {
    this.#pointsPresenters.forEach((presenter) => presenter.destroy());
    this.#pointsPresenters.clear();
  }

  #sortPoints(sortType) {
    this.#currentSortType = sortType;
    this.#pointsList = sort[this.#currentSortType](this.#pointsList);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderSort();
    this.#renderPoints();
  };

  #renderSort() {
    const prevSortList = this.#listSort;

    const sortTypes = Object.values(SortType)
      .map((type) => ({
        type,
        isChecked: (type === this.#currentSortType),
        isDisabled: !EnabledSortType[type]
      }));

    this.#listSort = new SortView({
      types: sortTypes,
      onSortTypeChange: this.#handleSortTypeChange
    });

    if (prevSortList) {
      replace(this.#listSort, prevSortList);
      remove(prevSortList);
    }

    render(this.#listSort, this.#eventsContainer, RenderPosition.AFTERBEGIN);
  }
}
