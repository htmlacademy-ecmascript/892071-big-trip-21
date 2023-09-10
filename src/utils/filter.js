import { FilterType } from './../constants.js';
import { isDateExpired, isCurrentDay, isDateFuture } from './point.js';

const filter = {
  [FilterType.EVERTFING]: (points) => [...points],
  [FilterType.FUTURE]: (points) => points.filter((point) => isDateFuture(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isCurrentDay(point.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((point) => isDateExpired(point.dateFrom)),
}

export { filter };
