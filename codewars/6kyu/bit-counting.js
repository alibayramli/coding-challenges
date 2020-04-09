var countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .reduce((acc, elem) => acc + Number(elem), 0);
};
