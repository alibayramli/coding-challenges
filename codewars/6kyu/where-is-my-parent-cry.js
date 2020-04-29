function findChildren(dancingBrigade) {
  let arr = Array.from(dancingBrigade);
  let obj = {};
  for (let item of arr) {
    if (item === item.toLowerCase()) {
      obj[item.toUpperCase()] = (obj[item.toUpperCase()] || 0) + 1;
    }
  }
  return Object.entries(obj)
    .sort()
    .map((elem) => {
      let babies = "";
      while (elem[1] !== 0) {
        babies += elem[0].toLowerCase();
        elem[1]--;
      }
      return elem[0] + babies;
    })
    .join("");
}
