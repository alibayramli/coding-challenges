function mxdiflg(a1, a2) {
  if ((a1.length === 0) | (a2.length === 0)) return -1;
  let maxa1 = Math.max(...a1.map((elem) => elem.length));
  let mina1 = Math.min(...a1.map((elem) => elem.length));
  let maxa2 = Math.max(...a2.map((elem) => elem.length));
  let mina2 = Math.min(...a2.map((elem) => elem.length));
  let cond1 = Math.abs(maxa1 - mina2);
  let cond2 = Math.abs(maxa2 - mina1);
  return cond1 >= cond2 ? cond1 : cond2;
}
