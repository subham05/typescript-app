import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import { imageSources } from "src/assets/images";

export const offlineList = [
  {
    index: 1,
    subject: "Theorems",
    subjectTag: "Mathematics ",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Pending",
    thumbnail: imageSources.docImage,
  },
  {
    index: 2,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Submitted",
    thumbnail: imageSources.pptImg,
  },
  {
    index: 3,
    subject: "Theorems",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Accepted",
    thumbnail: imageSources.docImage,
  },
  {
    index: 4,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Rejected",
    thumbnail: imageSources.pptImg,
  },
  {
    index: 5,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Rejected",
    thumbnail: imageSources.pptImg,
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
    thumbnail: imageSources.pptImg,
  },
  {
    index: 2,
    subject: "Unit III exercise - questions & answers",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Pending",
    thumbnail: imageSources.pptImg,
  },
  {
    index: 3,
    subject: "Rise of titans and their war - questions and...",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Pending",
    thumbnail: imageSources.pptImg,
  },
  {
    index: 4,
    subject: "Theorems",
    subjectTag: "Mathematics",
    submissionDate: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    status: "Pending",
    thumbnail: imageSources.pptImg,
  },
];

export const subjectList: DropdownItemProps[] = [
  { label: "AllSubject", value: "AllSubject" },
  { label: "Math", value: "Math" },
];
export const statusList: DropdownItemProps[] = [
  { label: "Offline", value: "Offline" },
  { label: "Live", value: "Live" },
];
