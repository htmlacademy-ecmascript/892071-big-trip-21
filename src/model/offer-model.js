import { getOffers } from './../mock/offers.js';

export default class OfferModel {
  #offers = getOffers();

  get offers() {
    return this.#offers;
  }
}
