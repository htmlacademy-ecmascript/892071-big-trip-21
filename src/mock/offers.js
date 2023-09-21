const offers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 0,
        title: 'Switch to comfort class',
        price: 10
      },
      {
        id: 1,
        title: 'Add luggage',
        price: 15
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 0,
        title: 'Choose seats',
        price: 10
      },
      {
        id: 1,
        title: 'Add luggage',
        price: 15
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 0,
        title: 'Add luggage',
        price: 15
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 0,
        title: 'Choose seats',
        price: 20
      },
      {
        id: 1,
        title: 'Add luggage',
        price: 15
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 0,
        title: 'Add meal',
        price: 10
      },
      {
        id: 1,
        title: 'Add breakfast',
        price: 15
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 0,
        title: 'Overnight stay at the hotel',
        price: 1
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 0,
        title: 'Add breakfast',
        price: 15
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 0,
        title: 'Add luggage',
        price: 15
      },
      {
        id: 1,
        title: 'Add breakfast',
        price: 15
      }
    ]
  },
];

function getOffers() {
  return offers;
}

export { getOffers };
