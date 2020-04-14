function minValue(values) {
  return +Array.from(new Set(values)).sort().join("");
}
