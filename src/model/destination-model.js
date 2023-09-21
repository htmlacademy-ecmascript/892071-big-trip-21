import { getDestinations } from './../mock/destinations.js';

export default class DestinationModel {
  #destinations = getDestinations();

  get destinations() {
    return this.#destinations;
  }
}
