import isLeapYear from "src/functions/date/isLeapYear";

function checkLeapYear(firstDate: Date, secondDate: Date): boolean {
  if (
    isLeapYear(firstDate.getFullYear()) &&
    firstDate.getMonth() === 1 &&
    secondDate.getMonth() === 1
  ) {
    return firstDate.getDate() === 29 && secondDate.getDate() === 28;
  }
  return false;
}

function isAnniversary(firstDate: Date, secondDate: Date): boolean {
  if (checkLeapYear(firstDate, secondDate) || checkLeapYear(secondDate, firstDate)) {
    return true;
  }
  return (
    firstDate.getDate() === secondDate.getDate() && firstDate.getMonth() === secondDate.getMonth()
  );
}

export default isAnniversary;
