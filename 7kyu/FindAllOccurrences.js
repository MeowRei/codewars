const findAll = (array, n) => {
  const result = [];
  array.forEach((elem, index) => (elem === n ? result.push(index) : null));
  return result;
};

// console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));
