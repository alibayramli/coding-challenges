function stray(numbers) {
  let cache = {};
  for (let item of numbers) {
    cache[item] = (cache[item] || 0) + 1;
  }
  for (let item of Object.keys(cache)) {
    if (cache[item] === 1) return +item;
  }
}
