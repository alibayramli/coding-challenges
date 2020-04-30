function accum(s) {
  let final = "";
  for (let i = 0; i < s.length; i++) {
    let check = i;
    while (check !== -1) {
      if (check === i) {
        final += s[i].toUpperCase();
      } else {
        final += s[i].toLowerCase();
      }
      check--;
    }
    if (i !== s.length - 1) final += "-";
  }
  return final;
}
