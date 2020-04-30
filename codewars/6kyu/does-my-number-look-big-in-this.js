function narcissistic(value) {
  let arr = Array.from(String(value));
  let sum = 0;
  for (let i of arr) {
    sum += i ** arr.length;
  }
  return sum === value ? true : false;
}
