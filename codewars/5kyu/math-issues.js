Math.round = function (number) {
  let integer = parseInt(number);
  return number - integer < 0.5 ? integer : integer + 1;
};

Math.ceil = function (number) {
  let integer = parseInt(number);
  return integer === number ? integer : integer + 1;
};

Math.floor = function (number) {
  return parseInt(number);
};
