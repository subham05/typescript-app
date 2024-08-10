export const attendanceList = [
  {
    index: 1,
    subject: "Mathematics",
    percentage: 85,
    totalDays: 28,
    presentDays: 14,
    absentDays: 14,
  },
  {
    index: 2,
    subject: "English",
    percentage: 50,
    totalDays: 28,
    presentDays: 14,
    absentDays: 14,
  },
  {
    index: 3,
    subject: "History",
    percentage: 35,
    totalDays: 28,
    presentDays: 14,
    absentDays: 14,
  },
];
export const daysNames = [
  {
    index: 1,
    name: "Mon",
  },
  {
    index: 2,
    name: "Tue",
  },
  {
    index: 3,
    name: "Wed",
  },
  {
    index: 4,
    name: "Thu",
  },
  {
    index: 5,
    name: "Fri",
  },
  {
    index: 6,
    name: "Sat",
  },
];
export const attendanceData = [
  {
    index: 1,
    percentage: "100%",
    type: 1,
  },
  {
    index: 2,
    percentage: "60%",
    type: 2,
  },
  {
    index: 3,
    percentage: "100%",
    type: 1,
  },
  {
    index: 4,
    percentage: "100%",
    type: 1,
    typeSecondary: 3,
    percentageSecondary: "45%",
  },
  {
    index: 5,
    percentage: "100%",
    type: 1,
    typeSecondary: 3,
    percentageSecondary: "45%",
  },
  {
    index: 6,
    percentage: "50%",
    type: 1,
  },
];
type Props = {
  label: string;
  value: string;
};
export const List: Props[] = [
  { label: "Daily", value: "Daily" },
  { label: "Weekly", value: "Weekly" },
  { label: "Monthly", value: "Monthly" },
];
