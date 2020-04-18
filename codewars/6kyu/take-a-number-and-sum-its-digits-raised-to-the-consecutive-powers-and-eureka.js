function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (euroka(i)) {
      arr.push(i);
    }
  }
  function euroka(num) {
    if (num < 10) return true;
    else {
      let tmp = num,
        sum = 0;
      while (tmp / 10) {
        sum += (tmp % 10) ** String(tmp).length;
        tmp = Math.trunc(tmp / 10);
      }
      return num === sum;
    }
  }
  return arr;
}
