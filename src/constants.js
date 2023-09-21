const TRIP_ITEM_COUNT = 4;

const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const FilterType = {
  EVERTFING: 'Everything',
  FUTURE: 'Future',
  PRESENT: 'Present',
  PAST: 'Past',
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer'
};

const EnabledSortType = {
  [SortType.DAY]: true,
  [SortType.EVENT]: false,
  [SortType.TIME]: true,
  [SortType.PRICE]: true,
  [SortType.OFFER]: false,
};

export {
  TRIP_ITEM_COUNT,
  EVENT_TYPES,
  FilterType,
  SortType,
  EnabledSortType
};
