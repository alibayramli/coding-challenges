function findShort(s) {
  let words = s.split(" ");
  let min = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < min) {
      min = words[i].length;
    }
  }
  return min;
}
