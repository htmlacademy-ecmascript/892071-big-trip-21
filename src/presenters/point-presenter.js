import PointView from './../view/point-view.js';
import AddNewPointView from './../view/add-new-point-view.js';
import { render, replace, remove } from './../framework/render.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #pointContainer = null;

  #pointComponent = null;
  #pointEditComponent = null;
  #handleDataChange = null;
  #handleModeChange = null;

  #point = null;
  #offerModel = null;
  #destinationModel = null;

  #mode = Mode.DEFAULT;

  constructor({pointContainer, offerModel, destinationModel, onDataChange, onModeChange}) {
    this.#pointContainer = pointContainer;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      offers: this.#offerModel.getOffersByType(this.#point.type),
      destination: this.#destinationModel.getById(this.#point.id),
      onEditClick: this.#pointEditClickHandler,
      onFavoriteClick: this.#favoriteClickHandler
    });

    this.#pointEditComponent = new AddNewPointView({
      point: this.#point,
      offers: this.#offerModel.getOffersByType(this.#point.type),
      destination: this.#destinationModel.getById(this.#point.id),
      isEditMode: true,
      onResetClick: this.#resetButtonClickHandler,
      onSubmitClick: this.#submitFormHandler,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointContainer);

      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceEditFormToPoint();
    }
  }

  /**
   * обработчик нажатися на esc
   * @param evt
   */
  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditFormToPoint();
    }
  };

  /**
   * обработчик раскрытия формы редактирования
   */
  #pointEditClickHandler = () => {
    this.#replacePointToEditForm();
  };

  /**
   * обработчик закрытия формы редактирования
   */
  #resetButtonClickHandler = () => {
    this.#replaceEditFormToPoint();
  };

  /**
   * обработчик отправки формы
   */
  #submitFormHandler = (point) => {
    this.#handleDataChange(point);
    this.#replaceEditFormToPoint();
  };

  /**
   * замена компонента ивента формой редактирования
   */
  #replacePointToEditForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  /**
   * замена формы редактирования компонентом ивента
   */
  #replaceEditFormToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  /**
   * отметить точку как isFavorite
   * */
  #favoriteClickHandler = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
