function sortItOut(array) {
  let odds = array
    .filter((el) => Math.floor(el) % 2 == 1)
    .sort((a, b) => a - b);
  let evens = array
    .filter((el) => Math.floor(el) % 2 == 0)
    .sort((a, b) => b - a);
  return odds.concat(evens);
}
