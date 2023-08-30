import { TRIP_ITEM_COUNT } from '../constants.js';
import { getRandomPoint } from '../mock/points.js';

export default class PointModel {
  points = Array.from({length: TRIP_ITEM_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
