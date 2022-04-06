export const keyboardUpdate = (keyboard, checkedLetters) => {
  const alphabet = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];
  const keyboardArr = [...keyboard];
  const indexes = checkedLetters.map((arr) => {
    let index = alphabet.findIndex((letter) => letter === arr[0]);
    return [...arr, index];
  });
  indexes.forEach((arr) => {
    keyboardArr[arr[2]] = arr[1];
  });
  return keyboardArr;
};
