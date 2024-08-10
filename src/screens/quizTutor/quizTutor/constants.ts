import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import { imageSources } from "src/assets/images";

export const offlineList = [
  {
    index: 1,
    subject: "Theorems",
    subjectTag: "Class 5 • Mathematics ",
    submissionDate: "05/05/2023",
    status: true,
    thumbnail: imageSources.docImage,
  },
  {
    index: 2,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Class 5 • Mathematics ",
    submissionDate: "05/05/2023",
    status: true,
    thumbnail: imageSources.pptImg,
  },
  {
    index: 3,
    subject: "Theorems",
    subjectTag: "Class 5 • Mathematics ",
    submissionDate: "05/05/2023",
    status: true,
    thumbnail: imageSources.docImage,
  },
  {
    index: 4,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Class 5 • Mathematics ",
    submissionDate: "05/05/2023",
    status: false,
    thumbnail: imageSources.pptImg,
  },
  {
    index: 5,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Class 5 • Mathematics ",
    submissionDate: "05/05/2023",
    status: true,
    thumbnail: imageSources.pptImg,
  },
];
export const liveList = [
  {
    index: 1,
    subject: "Math",
    startAt: "05/05/2023",
    completed: false,
    status: true,
    thumbnail: imageSources.pptImg,
    start: true,
  },
  {
    index: 2,
    subject: "Math",
    startAt: "05/05/2023",
    completed: false,
    status: true,
    thumbnail: imageSources.pptImg,
    start: false,
  },
  {
    index: 3,
    subject: "Math",
    startAt: "05/05/2023",
    completed: false,
    status: true,
    thumbnail: imageSources.pptImg,
    start: false,
  },
  {
    index: 4,
    subject: "Math",
    startAt: "05/05/2023",
    completed: false,
    status: true,
    thumbnail: imageSources.pptImg,
    start: false,
  },
];
export const SubmissionList = [
  {
    index: 1,
    name: "Desirae Dokidis ",
    subjectTag: "Mathematics • Pythagoras theorem",
    date: "05/05/2023",
    submitStatus: "Pending",
    profilePic: imageSources.studentImageOne,
  },
  {
    index: 2,
    name: "Desirae Dokidis ",
    subjectTag: "Mathematics • Pythagoras theorem",
    date: "05/05/2023",
    submitStatus: "Pending",
    profilePic: imageSources.studentImageTwo,
  },
  {
    index: 3,
    name: "Desirae Dokidis ",
    subjectTag: "Mathematics • Pythagoras theorem",
    date: "05/05/2023",
    submitStatus: "Pending",
    profilePic: imageSources.studentImageThree,
  },
  {
    index: 4,
    name: "Desirae Dokidis ",
    subjectTag: "Mathematics • Pythagoras theorem",
    date: "05/05/2023",
    submitStatus: "Pending",
    profilePic: imageSources.studentImageOne,
  },
];

export const courseList: DropdownItemProps[] = [
  { label: "Course", value: "Course" },
  { label: "Average", value: "Average" },
];
export const typeList: DropdownItemProps[] = [
  { label: "Status", value: "Status" },
  { label: "Math", value: "Math" },
];
