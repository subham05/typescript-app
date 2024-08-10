import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";

export const offlineList = [
  {
    index: 1,
    subject: "Theorems",
    subjectTag: "Mathematics ",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Pending",
  },
  {
    index: 2,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Submitted",
  },
  {
    index: 3,
    subject: "Theorems",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Accepted",
  },
  {
    index: 4,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Rejected",
  },
  {
    index: 5,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Rejected",
  },
];
export const onlineList = [
  {
    index: 1,
    subject: "Theorems",
    subjectTag: "Mathematics ",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: true,
    status: "Ongoing",
  },
  {
    index: 2,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Pending",
  },
  {
    index: 3,
    subject: "Rise of titans and their war - questions and...",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Pending",
  },
  {
    index: 4,
    subject: "Theorems",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Pending",
  },
];

export const subjectList: DropdownItemProps[] = [
  { label: "All Subject", value: "All Subject" },
  { label: "Math", value: "Math" },
];
export const statusList: DropdownItemProps[] = [
  { label: "Offline", value: "Offline" },
  { label: "Live", value: "Live" },
];
