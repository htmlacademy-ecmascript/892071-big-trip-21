function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function modifyStringToCapitalize(string) {
  const capitalizeFirstLetter = string.charAt(0).toUpperCase();
  return capitalizeFirstLetter + string.slice(1);
}

export {
  getRandomArrayElement,
  modifyStringToCapitalize
};
