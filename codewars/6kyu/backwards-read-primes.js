function backwardsPrime(start, stop) {
  let arr = [];
  for (let i = start; i <= stop; i++) {
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
  return arr;
}
