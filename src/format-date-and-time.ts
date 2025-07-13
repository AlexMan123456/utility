import addDaysToDate from "src/add-days-to-date";

function formatDateAndTime(inputDate: Date): string {
  const [date, time] = inputDate.toISOString().split("T");
  const [hours, minutes] = time.split(":");

  if (inputDate.toString() === addDaysToDate(new Date(), -1).toString()) {
    return `Yesterday at ${hours}:${minutes}`;
  }
  if (inputDate.toString() === new Date().toString()) {
    return `Today at ${hours}:${minutes}`;
  }

  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

export default formatDateAndTime;
