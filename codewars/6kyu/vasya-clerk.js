function tickets(peopleInLine) {
  if (peopleInLine[0] !== 25) return "NO";
  let money = [
    [25, 1],
    [50, 0],
    [100, 0],
  ];
  for (let i = 1; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      money[0][1]++;
    } else if (peopleInLine[i] === 50) {
      money[1][1]++;
      money[0][1]--;
      if (money[0][1] < 0) return "NO";
    } else if (peopleInLine[i] === 100) {
      money[2][1]++;
      if (money[1][1] >= 1) {
        money[1][1]--;
        money[0][1]--;
        if (money[0][1] < 0 || money[1][1] < 0) return "NO";
      } else {
        money[0][1] -= 3;
        if (money[0][1] < 0) return "NO";
      }
    }
  }
  return "YES";
}
