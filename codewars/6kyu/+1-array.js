function upArray(arr) {
  if (arr.length === 0) return null;
  if (arr.length > 18) {
    let lastDigit = arr.pop();
    arr.push(lastDigit + 1);
    return arr;
  }
  for (item of arr) {
    if (String(item).split("").length !== 1) return null;
  }
  let num = Number(arr.join("")) + 1;
  return isNaN(num)
    ? null
    : String(num)
        .split("")
        .map((elem) => +elem);
}
