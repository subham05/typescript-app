import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import { imageSources } from "src/assets/images";

export const coursesList = [
  {
    index: 1,
    subject: "Mathematics",
    subjectTag: "Per hour",
    dateFrom: "05/05/2023",
    dateTo: "12/07/2023",
    join: true,
    sessions: 20,
    joinAt: "Join at 10AM",
    icon: imageSources.courseOne,
  },
  {
    index: 2,
    subject: "Science",
    subjectTag: "Per topic",
    dateFrom: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    sessions: 20,
    joinAt: "Join at 10AM",
    icon: imageSources.courseTwo,
  },
  {
    index: 3,
    subject: "Algebra - 7",
    subjectTag: "Per topic",
    dateFrom: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    sessions: 20,
    joinAt: "Join at 10AM",
    icon: imageSources.courseThree,
  },
  {
    index: 4,
    subject: "English",
    subjectTag: "Per topic",
    dateFrom: "05/05/2023",
    dateTo: "12/07/2023",
    join: false,
    sessions: 20,
    joinAt: "06/05/2023, 10AM",
    icon: imageSources.courseFour,
  },
];
export const videoCardData = [
  {
    id: 1,
    thumbnail: imageSources.demoRecording1,
    duration: "32:49",
    title: "Communication skill",
    time: "11:00 AM - 12:00 PM",
    uploadedBy: "Arlene McCoy",
    uploadedTime: "20/04/2023",
  },
  {
    id: 2,
    thumbnail: imageSources.demoRecording2,
    duration: "32:49",
    title: "Communication skill",
    time: "11:00 AM - 12:00 PM",
    uploadedBy: "Arlene McCoy",
    uploadedTime: "20/04/2023",
  },
  {
    id: 3,
    thumbnail: imageSources.teacherOne,
    duration: "32:49",
    title: "Communication skill",
    time: "11:00 AM - 12:00 PM",
    uploadedBy: "Arlene McCoy",
    uploadedTime: "20/04/2023",
  },
];
export const subjectList: DropdownItemProps[] = [
  { label: "AllSubject", value: "AllSubject" },
  { label: "Math", value: "Math" },
];
export const courseFilter: DropdownItemProps[] = [
  { label: "Offline", value: "Offline" },
  { label: "Live", value: "Live" },
];
