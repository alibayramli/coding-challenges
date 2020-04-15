function reverseWords(str) {
  return str
    .split(" ")
    .map((elem) => elem.split("").reverse().join(""))
    .join(" ");
}
