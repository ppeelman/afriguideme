export const addDaysToDate = (date: Date, numOfDays: number) => {
  const newDate = new Date();
  newDate.setDate(date.getDate() + numOfDays);
  return newDate;
}

export const formatDate = (date: Date, locale: string) => {
  const options = { month: 'long', day: 'numeric' };
  return date.toLocaleDateString('nl-BE', options);
}
