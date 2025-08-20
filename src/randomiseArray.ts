import getRandomNumber from "src/getRandomNumber";

function randomiseArray(array: unknown[]): unknown[] {
  const mutableArray = [...array];
  const outputArray = [];
  do {
    const indexToRemove = getRandomNumber(0, mutableArray.length - 1);
    outputArray.push(mutableArray.splice(indexToRemove, 1)[0]);
  } while (mutableArray.length > 0);
  return outputArray;
}

export default randomiseArray;
