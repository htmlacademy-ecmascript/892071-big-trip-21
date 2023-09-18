import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMM';
const TIME_FORMAT = 'HH:mm';
const DEFAULT_EVENT_TIME = 'YY/MM/DD HH:mm';

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;

/**
 * форматирование даты 'D MMM'
 * @param date
 * @returns отформатированная дата
 */
function formatStringToDate(date) {
  return dayjs(date).format(DATE_FORMAT);
}

/**
 * форматирование даты 'HH:mm'
 * @param date
 * @returns отформатированная дата
 */
function formatStringToTime(date) {
  return dayjs(date).format(TIME_FORMAT);
}

/**
 * форматирование даты
 * @param date
 * @returns отформатированная дата
 */
function formatDefaultEventStringToTime(date) {
  return dayjs(date).format(DEFAULT_EVENT_TIME);
}

/**
 * подсчет разница во времени
 * @param timeStart дата начала
 * @param timeEnd дата окончания
 * @returns {string} строка разницы во времени
 */
function countTimeInterval(timeStart, timeEnd) {
  const timeInterval = dayjs(timeEnd).diff(timeStart, 'minute');
  let days = 0;
  let hours = 0;
  let minutes = 0;

  if (timeInterval <= MINUTES_IN_HOUR) {
    return `${timeInterval}M`;
  }

  if (timeInterval > MINUTES_IN_HOUR && timeInterval < MINUTES_IN_DAY) {
    hours = Math.floor(timeInterval / MINUTES_IN_HOUR);
    minutes = timeInterval % MINUTES_IN_HOUR;

    return `${hours}H ${minutes}M`;
  }

  if (timeInterval > MINUTES_IN_DAY) {
    days = Math.floor(timeInterval / MINUTES_IN_DAY);
    minutes = timeInterval % MINUTES_IN_DAY;

    if (minutes > MINUTES_IN_HOUR) {
      hours = Math.floor(minutes / MINUTES_IN_HOUR);
      minutes = minutes % MINUTES_IN_HOUR;
    }

    return `${days}d ${hours}h ${minutes}m`;
  }
}

/**
 * проверка - текущий день
 * @param date
 * @returns {boolean}
 */
function isCurrentDay(date) {
  return dayjs(date).isSame(dayjs(), 'D');
}

/**
 * проверка - передааная дата после текущего дня
 * @param date
 * @returns {boolean}
 */
function isDateExpired(date) {
  return dayjs(date).isAfter(dayjs(), 'D');
}

/**
 * проверка - переданная дата истекла
 * @param date
 * @returns {boolean}
 */
function isDateFuture(date) {
  return dayjs(date).isBefore(dayjs(), 'D');
}

/**
 * обновление точки маршрута
 * @param points исходный массив
 * @param update обновленная точка
 * @returns новый массив
 */
function updatePoint(points, update) {
  return points.map((point) => point.id === update.id ? update : point);
}

export {
  formatStringToDate,
  formatStringToTime,
  formatDefaultEventStringToTime,
  countTimeInterval,
  isCurrentDay,
  isDateExpired,
  isDateFuture,
  updatePoint
};
