import dayjs from "dayjs";

export function generateDateFromYearBeginning() {
  const firstDayOfTheYear = dayjs().startOf("year");
  const today = new Date();

  let compareDate = firstDayOfTheYear;

  const dates = [];

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}
