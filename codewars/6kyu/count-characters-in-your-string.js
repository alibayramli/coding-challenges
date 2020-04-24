function count(string) {
  let cache = {};
  for (let item of string) {
    cache[item] = (cache[item] || 0) + 1;
  }
  return cache;
}
