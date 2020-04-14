function dashatize(num) {
  let arr = String(num)
    .split("")
    .filter((elem) => elem !== "-");
  return arr.length === 1
    ? arr[0]
    : arr
        .map((elem, index, array) => {
          if (elem % 2 == 1) {
            if (index === 0) return elem + "-";
            else if (index === arr.length - 1) {
              if (array[index - 1] % 2 == 1) return elem;
              else return "-" + elem;
            } else if (index > 0) {
              if (array[index - 1] % 2 == 1) return elem + "-";
              else return "-" + elem + "-";
            }
          } else {
            return elem;
          }
        })
        .join("");
}
