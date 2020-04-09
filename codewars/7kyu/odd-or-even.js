function oddOrEven(array) {
  return array.reduce(function (acc, elem) {
    return acc + elem;
  }, 0) %
    2 ==
    0
    ? "even"
    : "odd";
}
