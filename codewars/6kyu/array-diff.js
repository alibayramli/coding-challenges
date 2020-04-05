function arrayDiff(a, b) {
  let res = [];
  const mapB = b.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );
  for (let i of a) {
    if (!mapB.has(i)) res.push(i);
  }
  return res;
}
