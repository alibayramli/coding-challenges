function findEvenIndex(arr) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    let suml = 0;
    let sumr = 0;
    for (let l = 0; l < i; l++) {
      suml += arr[l];
    }
    for (let r = arr.length - 1; r > i; r--) {
      sumr += arr[r];
    }
    if (suml == sumr) {
      result = i;
      break;
    }
  }
  return result;
}
