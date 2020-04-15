function listSquared(m, n) {
  let res = [];
  for (let i = m; i <= n; i++) {
    if (Squared(i)) {
      let obj = new Squared();
      res.push([i, obj.sum]);
    }
  }
  function Squared(num) {
    this.divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i ** 2);
      }
    }
    this.sum = divisors.reduce((acc, elem) => acc + elem);
    return Number.isInteger(Math.sqrt(sum));
  }
  return res;
}
