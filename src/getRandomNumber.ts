function getRandomNumber(lowerBound: number, upperBound: number): number {
  if (lowerBound % 1 !== 0 || upperBound % 1 !== 0) {
    throw new Error("NON_INTEGER_INPUTS");
  }
  return Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
}

export default getRandomNumber;
