export const isLeap = (numb) => {
  if (numb % 4 == 0 && numb % 100 != 0) {
    return true;
  } else {
    if (numb % 400 == 0) return true;
    else return false;
  }
};
