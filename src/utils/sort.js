import dayjs from 'dayjs';
import { SortType } from './../constants.js';

/**
 * вес точки маршрута для сортировки
 * @param dateA
 * @param dateB
 * @returns вес элемента
 */
function getWeightForDate(dateA, dateB) {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
}

/**
 * сортировка по дате - от самой старой к самой новой
 * @param pointA
 * @param pointB
 * @returns отсортированный массив
 */
function sortByDay(pointA, pointB) {
  const weight = getWeightForDate(pointA.dateFrom, pointB.dateFrom);

  return weight ?? dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom), 'D');
}

/**
 * сортировка по стоимости - от максимальной к минимальной
 * @param pointA
 * @param pointB
 * @returns отсортированный массив
 */
function sortByPrice(pointA, pointB) {
  const weight = getWeightForDate(pointA.basePrice, pointB.basePrice);

  if (!weight) {
    if (pointA.basePrice > pointB.basePrice) {
      return -1;
    }

    if (pointA.basePrice < pointB.basePrice) {
      return 1;
    }

    return 0;
  }

  return weight;
}

/**
 *
 * сортировка по длительности - от самых долгих к самым коротким
 * @param pointA
 * @param pointB
 * @returns отсортированный массив
 */
function sortByTime(pointA, pointB) {
  const pointADiffPeriod = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom), 'm');
  const pointBDiffPeriod = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom), 'm');
  const weightFrom = getWeightForDate(pointA.dateFrom, pointB.dateFrom);
  const weightTo = getWeightForDate(pointA.dateTo, pointB.dateTo);

  if (!weightFrom && !weightTo) {
    if (pointADiffPeriod > pointBDiffPeriod) {
      return -1;
    }

    if (pointADiffPeriod < pointBDiffPeriod) {
      return 1;
    }

    return 0;
  }

  return -1;
}

const sort = {
  [SortType.DAY]: (points) => [...points].sort(sortByDay),
  [SortType.PRICE]: (points) => [...points].sort(sortByPrice),
  [SortType.TIME]: (points) => [...points].sort(sortByTime),
  [SortType.EVENT]: () => {
    throw new Error(`Sort by ${SortType.EVENT} is not implemented`);
  },
  [SortType.OFFER]: () => {
    throw new Error(`Sort by ${SortType.OFFER} is not implemented`);
  },
};

export {
  sort
};
