function maskify(cc) {
  return Array.from(cc)
    .map((elem, index) => {
      return index < cc.length - 4 ? "#" : elem;
    })
    .join("");
}
