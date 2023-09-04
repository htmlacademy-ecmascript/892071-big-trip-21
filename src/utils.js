import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMM';
const TIME_FORMAT = 'HH:mm';
const DEFAULT_EVENT_TIME = 'YY/MM/DD HH:mm';

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;

function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function formatStringToDate(date) {
  return dayjs(date).format(DATE_FORMAT);
}

function formatStringToTime(date) {
  return dayjs(date).format(TIME_FORMAT);
}

function formatDefaultEventStringToTime(date) {
  return dayjs(date).format(DEFAULT_EVENT_TIME);
}

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

export {
  getRandomArrayElement,
  formatStringToDate,
  formatStringToTime,
  formatDefaultEventStringToTime,
  countTimeInterval
};
