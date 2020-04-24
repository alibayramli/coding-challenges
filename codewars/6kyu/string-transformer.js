function stringTransformer(str) {
  let splitted = str.split(" ");
  let reversed = splitted.reverse();
  let modified = reversed
    .map((elem) => {
      return elem
        .split("")
        .map((elem) => {
          return elem === elem.toUpperCase()
            ? elem.toLowerCase()
            : elem.toUpperCase();
        })
        .join("");
    })
    .join(" ");
  return modified;
}
