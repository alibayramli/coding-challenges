function twoSort(s) {
  let sorted = s.sort()[0];
  return Array.from(sorted)
    .map((el, index, arr) => (index !== arr.length - 1 ? el + "***" : el))
    .join("");
}
