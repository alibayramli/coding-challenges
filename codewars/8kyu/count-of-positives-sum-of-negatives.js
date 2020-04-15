function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) {
    return [];
  }
  let cnt = 0,
    sumN = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] <= 0) {
      sumN += input[i];
    } else {
      cnt++;
    }
  }
  return [cnt, sumN];
}
