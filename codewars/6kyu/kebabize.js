function kebabize(str) {
  return str
    .split("")
    .filter((elem) => isNaN(elem))
    .map((elem, index) => {
      if (elem === elem.toUpperCase()) {
        return index === 0 ? elem.toLowerCase() : "-" + elem.toLowerCase();
      } else {
        return elem;
      }
    })
    .join("");
}
