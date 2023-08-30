import { getOffers } from './../mock/offers.js';

export default class OfferModel {
  offers = getOffers();

  getOffers() {
    return this.offers;
  }

  getOffersByType(type) {
    return this.offers.filter((offer) => offer.type === type);
  }
}
