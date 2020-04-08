function repeatStr(n, s) {
  if (n == 0) {
    return "";
  }
  return s + repeatStr(n - 1, s);
}
