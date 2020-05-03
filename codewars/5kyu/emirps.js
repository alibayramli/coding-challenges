function findEmirp(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      let backNum = backwardsNum(i);
      if (i !== backNum && isPrime(backNum)) {
        arr.push(i);
      }
    }
  }
  function isPrime(num) {
    if (num === 2) return true;
    if (num < 2 || num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function backwardsNum(num) {
    let word = "";
    while (num) {
      word += num % 10;
      num = parseInt(num / 10);
    }
    return +word;
  }
  let max = arr[0],
    sum = 0;
  for (let i of arr) {
    if (i > max) max = i;
    sum += i;
  }
  return [arr.length, max, sum];
}
