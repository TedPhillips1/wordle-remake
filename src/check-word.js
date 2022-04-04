export const checkWord = (word, guess) => {
  let checkArr = guess.map((letter, index) => {
    let wordCheck = word.filter((corrLetter) => {
      if (corrLetter === letter[0]) {
        return true;
      } else {
        return false;
      }
    });
    if (wordCheck.length > 0) {
      // issue - need to change the distance finder to give the closest distance not just the first
      let corrLocation = word.findIndex(
        (corrLetter) => corrLetter === letter[0]
      );
      let distance = index - corrLocation;
      return [letter[0], Math.abs(distance)];
    } else {
      return [letter[0], false];
    }
  });
  return checkArr;
};
