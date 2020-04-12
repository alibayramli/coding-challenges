function list(names) {
  if (names.length === 0) {
    return "";
  } else if (names.length === 1) {
    return names[0].name;
  } else if (names.length === 2) {
    return names[0].name + " & " + names[1].name;
  } else return names[0].name + ", " + list(names.slice(1));
}
