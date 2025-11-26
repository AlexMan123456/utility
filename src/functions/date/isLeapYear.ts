import parseIntStrict from "src/functions/parsers/parseIntStrict";

function isLeapYear(year: number): boolean {
  const parsedYear = parseIntStrict(`${year}`);
  return (parsedYear % 4 === 0 && parsedYear % 100 !== 0) || parsedYear % 400 === 0;
}

export default isLeapYear;
