export const lineHeight = (item: number) => {
  if (item > 150) {
    return 3;
  } else if (item > 80 && item < 150) {
    return 4;
  } else if (item > 50 && item < 80) {
    return 5;
  } else if (item > 20 && item < 50) {
    return 15;
  } else if (item > 10 && item < 20) {
    return 25;
  } else if (item <= 10) {
    return 35;
  } else {
    return 1;
  }
};
