function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function modifyStringToCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getById(destinations, id) {
  return destinations.find((destination) => destination.id === id);
}

function getOffersByType(offers, type) {
  return offers
    .filter((offer) => offer.type === type)
    .reduce((newArr, offerObject) => {
      offerObject.offers.forEach((offer) => newArr.push(offer));
      return newArr;
    }, []);
}

export {
  getRandomArrayElement,
  modifyStringToCapitalize,
  getById,
  getOffersByType
};
