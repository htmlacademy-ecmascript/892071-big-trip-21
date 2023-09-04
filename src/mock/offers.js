const offers = [
  {
    type: 'Taxi',
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
    type: 'Bus',
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
    type: 'Drive',
    offers: [
      {
        id: 0,
        title: 'Add luggage',
        price: 15
      }
    ]
  },
  {
    type: 'Train',
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
    type: 'Flight',
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
    type: 'Check-in',
    offers: [
      {
        id: 0,
        title: 'Overnight stay at the hotel',
        price: 1
      }
    ]
  },
  {
    type: 'Restaurant',
    offers: [
      {
        id: 0,
        title: 'Add breakfast',
        price: 15
      }
    ]
  },
  {
    type: 'Ship',
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
