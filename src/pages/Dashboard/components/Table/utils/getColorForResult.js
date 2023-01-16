export const getColorForResult = (value1, value2) => {
  if (value1 > value2) {
    return "var(--main-green)";
  } else if (value1 < value2) {
    return "var(--main-red)";
  } else {
    return "var(--main-orange)";
  }
};
