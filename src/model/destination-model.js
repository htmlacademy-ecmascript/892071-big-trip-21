import { getDestinations } from './../mock/destinations.js';

export default class DestinationModel {
  destinations = getDestinations();

  getDestinations() {
    return this.destinations;
  }

  getById(id) {
    return this.destinations.find((dest) => dest.id === id);
  }
}
