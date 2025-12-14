import parseIntStrict from "src/functions/parsers/parseIntStrict";

function getRandomNumber(lowerBound: number, upperBound: number): number {
  const parsedLowerBound = parseIntStrict(`${lowerBound}`);
  const parsedUpperBound = parseIntStrict(`${upperBound}`);
  return Math.floor(Math.random() * (parsedUpperBound - parsedLowerBound + 1) + parsedLowerBound);
}

export default getRandomNumber;
