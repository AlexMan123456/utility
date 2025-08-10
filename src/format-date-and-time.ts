import addDaysToDate from "src/add-days-to-date";

function formatDateAndTime(inputDate: Date): string {
  const yesterday = addDaysToDate(new Date(), -1);
  const today = new Date();
  const inputTime = `${inputDate.getHours().toString().padStart(2, "0")}:${inputDate.getMinutes().toString().padStart(2, "0")}`;

  if (
    inputDate.getDate() === yesterday.getDate() &&
    inputDate.getMonth() === yesterday.getMonth() &&
    inputDate.getFullYear() === yesterday.getFullYear()
  ) {
    return `Yesterday at ${inputTime}`;
  }
  if (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === yesterday.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  ) {
    return `Today at ${inputTime}`;
  }

  const formattedInputDay = inputDate.getDate().toString().padStart(2, "0");
  // inputDate.getMonth() + 1... Whoever decided the Date object should be like this, I just want to have a word with you...
  const formattedInputMonth = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const formattedInputYear = inputDate.getFullYear().toString().padStart(2, "0");
  return `${formattedInputDay}/${formattedInputMonth}/${formattedInputYear}, ${inputTime}`;
}

export default formatDateAndTime;
