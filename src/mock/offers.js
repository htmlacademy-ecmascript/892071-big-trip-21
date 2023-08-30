const offers = [
  {
    type: 'Taxi',
    offers:
    {
      id: 0,
      title: 'Switch to comfort class',
      price: 10
    }
  },
  {
    type: 'Drive',
    offers:
    {
      id: 1,
      title: 'Add luggage',
      price: 15
    }
  },
  {
    type: 'Train',
    offers:
    {
      id: 2,
      title: 'Choose seats',
      price: 20
    }
  },
  {
    type: 'Flight',
    offers:
      {
      id: 3,
      title: 'Add meal',
      price: 10
    }
  },
  {
    type: 'Check-in',
    offers:
      {
        id: 4,
        title: 'Overnight stay at the hotel',
        price: 1
      }
  },
  {
    type: 'Restaurant',
    offers:
      {
        id: 5,
        title: 'Add breakfast',
        price: 15
      }
  },
  {
    type: 'Ship',
    offers:
    {
      id: 1,
      title: 'Add luggage',
      price: 15
    }
  },
];

function getOffers() {
  return offers;
}

export { getOffers };
