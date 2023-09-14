import { getOffers } from './../mock/offers.js';

export default class OfferModel {
  #offers = getOffers();

  get offers() {
    return this.#offers;
  }

  getOffersByType(type) {
    return this.#offers
      .filter((offer) => offer.type === type)
      .reduce((newArr, offerObject) => {
        offerObject.offers.forEach((offer) => newArr.push(offer));
        return newArr;
      }, []);
  }
}
