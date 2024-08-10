import moment from "moment";
import { DateTimeFormats } from "./dateTimeFormats";
import "moment/locale/fr";
import "moment/locale/ar";
import "moment/locale/es";
import "moment/locale/ur";
export function formatDate(date: Date, locale = "en") {
  return date.toLocaleDateString(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
export function formatMomentDate(date: Date | string, locale = "en") {
  moment.locale(locale); // Set the locale to the desired language
  return moment(date, "YYYY-MM-DD").format(DateTimeFormats.monthYear);
}
export function formatMoment(date: Date | string) {
  return moment(date, "YYYY-MM-DD").format(DateTimeFormats.DayMonthYearSlash);
}

export function formatTime(date: Date | string) {
  return moment(date, "YYYY-MM-DD").format(DateTimeFormats.TimeAmPm);
}
export function formatMomentYear(date: Date | string) {
  return moment(date, "YYYY").format(DateTimeFormats.year);
}
export const formatWeekString = (startDate: Date, endDate: Date) => {
  const startMonth = startDate.toLocaleString("default", { month: "long" });
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  const year = startDate.getFullYear();
  return `${startMonth} ${startDay} - ${endDay}, ${year}`;
};
