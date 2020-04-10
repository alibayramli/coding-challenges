function iqTest(numbers) {
  let arr = numbers.split(" ");
  let evenCnt, oddCnt;
  evenCnt = arr.filter((elem) => elem % 2 == 0);
  oddCnt = arr.filter((elem) => elem % 2 == 1);
  if (evenCnt.length > oddCnt.length) {
    return arr.indexOf(oddCnt[0]) + 1;
  } else {
    return arr.indexOf(evenCnt[0]) + 1;
  }
}
