function sortArray(array) {
  let odds = array.filter((elem) => elem % 2).sort((a, b) => a - b);
  return array.map((elem) => (elem % 2 ? odds.shift() : elem));
}
