function wordsToMarks(string) {
  return string.split("").reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0);
}
