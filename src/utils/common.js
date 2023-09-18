/**
 * получение массива рандомных элементов
 * @param array исходный массив
 * @returns массив рандомных элементов
 */
function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export {getRandomArrayElement};
