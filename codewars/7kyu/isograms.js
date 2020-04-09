function isIsogram(str) {
  if (str === "") return true;
  str = str.toLowerCase();
  let obj = {};

  for (let s of str) {
    obj[s] = (obj[s] || 0) + 1;
  }

  for (let i of Object.values(obj)) {
    if (i > 1) {
      return false;
    }
  }
  return true;
}
