function SeriesSum(n) {
  let sum = 0;
  while (n !== 0) {
    sum += 1 / (3 * (n - 1) + 1);
    n--;
  }
  return "" + sum.toFixed(2);
}
