import { imageSources } from "src/assets/images";
import { useStyles } from "./index.styles";
const { theme } = useStyles({});
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
export const ctaList = [
  {
    index: 1,
    title: "cardOne",
    thumbnail: imageSources.home1,
    startColor: theme.gradient.blush.start,
    endColor: theme.gradient.blush.end,
    navigate: "ImportantAnnouncement",
  },
  {
    index: 2,
    title: "cardTwo",
    thumbnail: imageSources.home2,
    startColor: theme.gradient.mustard.start,
    endColor: theme.gradient.mustard.end,
    navigate: "UpcomingEvents",
  },
  {
    index: 3,
    title: "cardThree",
    thumbnail: imageSources.home3,
    startColor: theme.gradient.blue_block.start,
    endColor: theme.gradient.blue_block.end,
    navigate: "UpcomingExams",
  },
  {
    index: 4,
    title: "cardFour",
    thumbnail: imageSources.home4,
    startColor: theme.gradient.green_block.start,
    endColor: theme.gradient.green_block.end,
    navigate: "PrivateTeachers",
  },
];

export const ctaListPrivate = [
  {
    index: 1,
    title: "quizzes",
    thumbnail: imageSources.quizzesIcon,
    startColor: theme.gradient.mustard.start,
    endColor: theme.gradient.mustard.end,
    navigate: "Quizzes",
  },
  {
    index: 2,
    title: "privateTutors",
    thumbnail: imageSources.privateTutorIcon,
    startColor: theme.gradient.blush.start,
    endColor: theme.gradient.blush.end,
    navigate: "PrivateTeachers",
  },
];
