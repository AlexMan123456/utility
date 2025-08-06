function addDaysToDate(currentDate: Date = new Date(), dayIncrement: number = 1): Date {
  const newDate = currentDate;
  newDate.setDate(newDate.getDate() + dayIncrement);
  return newDate;
}

export default addDaysToDate;
