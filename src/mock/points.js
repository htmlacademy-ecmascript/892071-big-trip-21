import { getRandomArrayElement } from './../utils/common.js';

const points = [
  {
    id: 1,
    basePrice: 100,
    dateFrom: new Date('2023-12-15T13:20:00'),
    dateTo: new Date('2023-12-16T14:20:00'),
    destination: 1,
    isFavorite: true,
    offers: [0],
    type: 'taxi',
  },
  {
    id: 2,
    basePrice: 36,
    dateFrom: new Date('2023-09-12T13:20:00'),
    dateTo: new Date('2023-09-12T14:20:00'),
    destination: 2,
    isFavorite: false,
    offers: [1],
    type: 'bus',
  },
  {
    id: 3,
    basePrice: 510,
    dateFrom: new Date('2023-09-10T11:05:00'),
    dateTo: new Date('2023-09-12T03:20:00'),
    destination: 3,
    isFavorite: true,
    offers: [0],
    type: 'train',
  },
  {
    id: 4,
    basePrice: 912,
    dateFrom: new Date('2023-09-10T11:05:00'),
    dateTo: new Date('2023-09-12T03:20:00'),
    destination: 4,
    isFavorite: false,
    offers: [1],
    type: 'ship',
  },
  {
    id: 5,
    basePrice: 328,
    dateFrom: new Date('2023-09-12T22:15:00'),
    dateTo: new Date('2023-09-12T23:20:00'),
    destination: 5,
    isFavorite: true,
    offers: [0],
    type: 'drive',
  },
  {
    id: 6,
    basePrice: 637,
    dateFrom: new Date('2023-09-10T06:42:00'),
    dateTo: new Date('2023-09-10T15:21:00'),
    destination: 6,
    isFavorite: false,
    offers: [0],
    type: 'flight',
  },
  {
    id: 7,
    basePrice: 112,
    dateFrom: new Date('2023-09-12T19:00:00'),
    dateTo: new Date('2023-09-12T22:30:00'),
    destination: 7,
    isFavorite: true,
    offers: [0],
    type: 'restaurant',
  },
  {
    id: 8,
    basePrice: 742,
    dateFrom: new Date('2023-09-10T12:00:00'),
    dateTo: new Date('2023-09-12T12:00:00'),
    destination: 8,
    isFavorite: false,
    offers: [0],
    type: 'check-in',
  },
];

function getRandomPoint() {
  return getRandomArrayElement(points);
}

export { getRandomPoint };
