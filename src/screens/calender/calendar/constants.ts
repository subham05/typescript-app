import { imageSources } from "src/assets/images";

export const agendaList = [
  {
    index: 1,
    subject: "Mathematics",
    join: true,
    joinAt: "Join at 10:30 AM",
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    thumbnail: imageSources.image,
    completed: false,
    completedTime: "10:30 AM",
  },
  {
    index: 2,
    subject: "Webinar - Know C+..",
    join: false,
    joinAt: "Join at 10:30 AM",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    thumbnail: imageSources.image1,
    completed: true,
    completedTime: "10:30 AM",
  },
  {
    index: 3,
    subject: "English",
    join: false,
    joinAt: "Join at 10:30 AM",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    thumbnail: imageSources.image,
    completed: false,
    completedTime: "10:30 AM",
  },
  {
    index: 4,
    subject: "Mathematics",
    join: false,
    joinAt: "Join at 10:30 AM",
    startTime: "12:00 PM",
    endTime: "01:00 PM",
    thumbnail: imageSources.image,
    completed: false,
    completedTime: "10:30 AM",
  },
  {
    index: 5,
    subject: "Mathematics",
    join: false,
    joinAt: "Join at 10:30 AM",
    startTime: "01:00 PM",
    endTime: "02:00 PM",
    thumbnail: imageSources.image,
    completed: false,
    completedTime: "10:30 AM",
  },
  {
    index: 6,
    subject: "Mathematics",
    join: false,
    joinAt: "Join at 10:30 AM",
    startTime: "02:00 PM",
    endTime: "03:00 PM",
    thumbnail: imageSources.image,
    completed: false,
    completedTime: "10:30 AM",
  },
];
export const weekList = [
  {
    index: 1,
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    classes: [
      { index: 10, day: 0, name: "WeekOff", time: undefined },
      { index: 11, day: 1, name: "Webinar", time: "8:00" },
      { index: 12, day: 2, name: "Math", time: "8:00" },
      { index: 13, day: 3, name: "Math", time: "8:00" },
      { index: 14, day: 4, name: "Math", time: "8:00" },
      { index: 15, day: 5, name: "Math", time: "8:00" },
      { index: 16, day: 6, name: undefined, time: undefined },
    ],
  },
  {
    index: 2,
    startTime: "10:00 AM",
    endTime: "11:00 AM",
  },
  {
    index: 3,
    startTime: "11:00 AM",
    endTime: "12:00 PM",
  },
  {
    index: 4,
    startTime: "12:00 PM",
    endTime: "01:00 PM",
  },
  {
    index: 5,
    startTime: "01:00 PM",
    endTime: "02:00 PM",
  },
  {
    index: 6,
    startTime: "02:00 PM",
    endTime: "03:00 PM",
  },
  {
    index: 7,
    startTime: "02:00 PM",
    endTime: "03:00 PM",
  },
  {
    index: 8,
    startTime: "02:00 PM",
    endTime: "03:00 PM",
  },
];
export const weekCardList = [
  {
    index: 1,
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    day: "Sunday",
    classes: [{ index: 10, name: "WeekOff", duration: 8 }],
  },
  {
    index: 2,
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    day: "Monday",
    classes: [
      { index: 10, name: "Webinar", time: "8:00", duration: 1 },
      { index: 11, name: "Math", time: "10:00", duration: 1 },
      { index: 12, name: "English", time: "11:00", duration: 1 },
      { index: 13, name: "Recess", time: "12:00", duration: 1 },
      { index: 14, name: "Math", time: "10:00", duration: 1 },
      { index: 15, name: "Science", time: "11:00", duration: 1 },
      { index: 16, name: "Math", time: "10:00", duration: 1 },
      { index: 17, name: "Math", time: "10:00", duration: 1 },
    ],
  },
  {
    index: 3,
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    day: "Tuesday",
    classes: [
      { index: 10, name: "Math", time: "8:00", duration: 1 },
      { index: 11, name: "Mathematics Exam", time: "10:00", duration: 2 },
      { index: 12, name: "English", time: "11:00", duration: 1 },
      { index: 15, name: "Science", time: "11:00", duration: 1 },
      { index: 16, name: "Math", time: "10:00", duration: 1 },
      { index: 17, name: "Math", time: "10:00", duration: 1 },
      { index: 18, name: "Science", time: "11:00", duration: 1 },
    ],
  },
  {
    index: 4,
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    day: "Tuesday",
    classes: [
      { index: 10, name: "Math", time: "8:00", duration: 1 },
      { index: 12, name: "English", time: "11:00", duration: 1 },
      { index: 13, name: "English", time: "11:00", duration: 1 },
      { index: 14, name: "Recess", time: "12:00", duration: 1 },
      { index: 17, name: "Math", time: "10:00", duration: 1 },
      { index: 18, name: "Science", time: "11:00", duration: 1 },
      { index: 19, name: "Math", time: "10:00", duration: 1 },
      { index: 20, name: "Math", time: "10:00", duration: 1 },
    ],
  },
  {
    index: 5,
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    day: "Tuesday",
    classes: [
      { index: 10, name: "Math", time: "8:00", duration: 1 },
      { index: 12, name: "English", time: "11:00", duration: 1 },
      { index: 13, name: "English", time: "11:00", duration: 1 },
      { index: 14, name: "Recess", time: "12:00", duration: 1 },
      { index: 17, name: "Math", time: "10:00", duration: 1 },
      { index: 18, name: "Science", time: "11:00", duration: 1 },
      { index: 19, name: "Math", time: "10:00", duration: 1 },
      { index: 20, name: "Math", time: "10:00", duration: 1 },
    ],
  },
  {
    index: 6,
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    day: "Tuesday",
    classes: [
      { index: 10, name: "Math", time: "8:00", duration: 1 },
      { index: 12, name: "English", time: "11:00", duration: 1 },
      { index: 13, name: "English", time: "11:00", duration: 1 },
      { index: 14, name: "Recess", time: "12:00", duration: 1 },
      { index: 17, name: "Math", time: "10:00", duration: 1 },
      { index: 18, name: "Science", time: "11:00", duration: 1 },
      { index: 19, name: "Math", time: "10:00", duration: 1 },
      { index: 20, name: "Math", time: "10:00", duration: 1 },
    ],
  },
  {
    index: 7,
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    day: "Tuesday",
    classes: [
      { index: 10, name: undefined, time: "8:00", duration: 1 },
      { index: 12, name: "Webinar", time: "11:00", duration: 1 },
    ],
  },
];
export const classesList = [
  {
    index: 1,
    name: "Maharashtra",
    bgColor: "#C4EEE3",
    color: "#99DDCB",
  },
  {
    index: 2,
    name: "Math class",
    bgColor: "#E9E4FF",
    color: "#957AFF",
  },
  {
    index: 3,
    name: "Maharashtra",
    bgColor: "#C4EEE3",
    color: "#99DDCB",
  },
];
export const daysNames = [
  {
    index: 1,
    name: "Sun",
  },
  {
    index: 2,
    name: "Mon",
  },
  {
    index: 3,
    name: "Tue",
  },
  {
    index: 4,
    name: "Wed",
  },
  {
    index: 5,
    name: "Thu",
  },
  {
    index: 6,
    name: "Fri",
  },
  {
    index: 7,
    name: "Sat",
  },
];
type Subject = {
  label: string;
  value: string;
};
export const subjectList: Subject[] = [
  { label: "Day", value: "Day" },
  { label: "Week", value: "Week" },
  { label: "Month", value: "Month" },
];
