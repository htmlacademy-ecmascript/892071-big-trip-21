import { getOffers } from './../mock/offers.js';

export default class OfferModel {
  offers = getOffers();

  getOffers() {
    return this.offers;
  }

  getOfferByType(type) {
    return this.offers
      .filter((offer) => offer.type === type)
      .reduce((newArr, offerObject) => {
        offerObject.offers.forEach((offer) => newArr.push(offer));
        return newArr;
      }, []);
  }
}
