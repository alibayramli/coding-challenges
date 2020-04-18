function comp(array1, array2) {
  if (array1 === null || array2 === null || array1.length !== array2.length)
    return false;
  return (
    array1
      .map((el) => el ** 2)
      .sort()
      .toString() === array2.sort().toString()
  );
}
