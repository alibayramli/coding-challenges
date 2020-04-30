function pigIt(str) {
  let tmp = str
    .split(" ")
    .map((el) => (el !== "!" && el !== "?" ? popPushFunc(el) : el))
    .join(" ");
  function popPushFunc(element) {
    let first = element[0],
      final = "";
    for (let i = 1; i < element.length; i++) {
      final += element[i];
    }
    return final + first + "ay";
  }
  return tmp;
}
