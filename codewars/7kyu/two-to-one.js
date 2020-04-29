function longest(s1, s2) {
  let arr = Array.from(s1 + s2);
  return Array.from(new Set(arr)).sort().join("");
}
