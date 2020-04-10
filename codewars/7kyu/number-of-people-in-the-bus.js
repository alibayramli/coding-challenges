var number = function (busStops) {
  let arr1 = busStops.map((elem) => elem[0] - elem[1]);
  return arr1.reduce((acc, elem) => acc + elem, 0);
};
