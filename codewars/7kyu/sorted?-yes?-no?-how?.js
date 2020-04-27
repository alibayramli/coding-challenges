function isSortedAndHow(arr) {
  let array = Array.from(new Set(arr));
  let cntasc = 0,
    cntdesc = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) {
      cntasc++;
    } else if (array[i - 1] > array[i]) {
      cntdesc++;
    }
  }
  if (cntasc === array.length - 1) {
    return "yes, ascending";
  } else if (cntdesc === array.length - 1) {
    return "yes, descending";
  } else {
    return "no";
  }
}
