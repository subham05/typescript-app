import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import lightTheme from "@common/theme/themeCollection/light";
// const { theme } = useStyles({});
export const dummyTransaction = [
  {
    index: 1,
    name: "Desirae Dokidis ",
    type: "Class 5 • Mathematics • Per hour",
    amountPaid: "120$",
    transactionId: "79241135",
    adminShare: "0120$",
    tutorShare: "100$",
    date: "07/05/2023",
  },
  {
    index: 2,
    name: "Desirae Dokidis ",
    type: "Class 5 • Mathematics • Per hour",
    amountPaid: "120$",
    transactionId: "79241135",
    adminShare: "0120$",
    tutorShare: "100$",
    date: "07/05/2023",
  },
  {
    index: 3,
    name: "Desirae Dokidis ",
    type: "Class 5 • Mathematics • Per hour",
    amountPaid: "120$",
    transactionId: "79241135",
    adminShare: "0120$",
    tutorShare: "100$",
    date: "07/05/2023",
  },
  {
    index: 4,
    name: "Desirae Dokidis ",
    type: "Class 5 • Mathematics • Per hour",
    amountPaid: "120$",
    transactionId: "79241135",
    adminShare: "0120$",
    tutorShare: "100$",
    date: "07/05/2023",
  },
];

export const filterList: DropdownItemProps[] = [
  { label: "Course", value: "Course" },
  { label: "Live", value: "Live" },
];

export const subjectList: DropdownItemProps[] = [
  { label: "AllSubject", value: "AllSubject" },
  { label: "Math", value: "Math" },
];
export const ctaList = [
  {
    index: 1,
    title: "Total earning",
    earning: "$50K",
    startColor: lightTheme.theme.gradient.greetings.start,
    endColor: lightTheme.theme.gradient.greetings.end,
  },
  {
    index: 2,
    title: "Per topic earning",
    earning: "$30K",
    startColor: lightTheme.theme.gradient.blue_block.start,
    endColor: lightTheme.theme.gradient.blue_block.end,
  },
  {
    index: 3,
    title: "Per hour earning",
    earning: "$30K",
    startColor: lightTheme.theme.gradient.mustard.start,
    endColor: lightTheme.theme.gradient.mustard.end,
  },
  {
    index: 4,
    title: "TotalCourses",
    earning: "15",
    startColor: lightTheme.theme.gradient.blush.start,
    endColor: lightTheme.theme.gradient.blush.end,
  },
];
