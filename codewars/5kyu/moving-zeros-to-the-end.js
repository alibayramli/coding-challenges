var moveZeros = function (arr) {
  return arr
    .filter((elem) => elem !== 0)
    .concat(arr.filter((elem) => elem === 0));
};
