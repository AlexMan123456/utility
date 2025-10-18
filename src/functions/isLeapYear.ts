function isLeapYear(year: number): boolean {
  if (year % 1 !== 0) {
    throw new TypeError("NON_INTEGER_INPUT");
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export default isLeapYear;
