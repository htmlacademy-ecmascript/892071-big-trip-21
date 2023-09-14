import { render, replace } from './../framework/render.js';
import SortView from '../view/sort-view.js';
import ListEventsView from '../view/list-events-view.js';
import PointView from '../view/point-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EmptyListView from '../view/empty-list-view.js';

export default class MainPresenter {
  #listSort = new SortView();
  #listEvents = new ListEventsView();
  #emptyList = new EmptyListView();
  #eventsContainer = null;
  #pointModel = null;
  #offerModel = null;
  #destinationModel = null;

  #pointsList = [];
  #offersList = [];
  #destinationsList = [];

  constructor({ eventsContainer, pointModel, offerModel, destinationModel }) {
    this.#eventsContainer = eventsContainer;
    this.#pointModel = pointModel;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
  }

  init() {
    this.#pointsList = [...this.#pointModel.points];
    this.#offersList = [...this.#offerModel.offers];
    this.#destinationsList = [...this.#destinationModel.destinations];

    render(this.#listSort, this.#eventsContainer);
    render(this.#listEvents, this.#eventsContainer);

    if (this.#pointsList.length === 0) {
      render(this.#emptyList, this.#eventsContainer);
    }

    this.#pointsList.forEach((event) => {
      this.#renderPoint(event);
    });
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point: point,
      offers: this.#offerModel.getOffersByType(point.type),
      destination: this.#destinationModel.getById(point.id),
      onEditClick: pointEditClickHandler
    });

    const editPointComponent = new AddNewPointView({
      point: point,
      offers: this.#offerModel.getOffersByType(point.type),
      destination: this.#destinationModel.getById(point.id),
      isEditMode: true,
      onResetClick: resetButtonClickHandler,
      onSubmitClick: submitFormHandler
    });

    /**
     * замена компонента ивента формой редактирования
     */
    function replacePointToEditForm() {
      replace(editPointComponent, pointComponent);
    }

    /**
     * замена формы редактирования компонентом ивента
     */
    function replaceEditFormToPoint() {
      replace(pointComponent, editPointComponent);
    }

    /**
     * обработчик раскрытия формы редактирования
     */
    function pointEditClickHandler() {
      replacePointToEditForm();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    /**
     * обработчик закрытия формы редактирования
     */
    function resetButtonClickHandler() {
      replaceEditFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    /**
     * обработчик отправки формы
     */
    function submitFormHandler() {
      replaceEditFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(pointComponent, this.#listEvents.element);
  }
}
