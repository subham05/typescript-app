import { imageSources } from "src/assets/images";

export const publicList = [
  {
    index: 1,
    title: "Mathematics 3A",
    time: "01:35 PM",
    message: "Typing...",
    count: 1,
    thumbnail: imageSources.chatDemo4,
    active: false,
  },
  {
    index: 2,
    title: "Physics 3A",
    time: "01:35 PM",
    message: "Good afternoon alex",
    count: 1,
    thumbnail: imageSources.chatDemo3,
    active: false,
  },
  {
    index: 3,
    title: "Science 3A",
    time: "01:35 PM",
    message: "Good afternoon class",
    count: 0,
    thumbnail: imageSources.chatDemo2,
    active: false,
  },
];
export const otherList = [
  {
    index: 4,
    title: "Drama Group",
    time: "01:35 PM",
    message: "You: Let’s connect today after class",
    count: 0,
    thumbnail: imageSources.chatDemo1,
    active: true,
  },
  {
    index: 5,
    title: "Science class",
    time: "01:35 PM",
    message: "@all join the session",
    count: 0,
    thumbnail: imageSources.chatDemo5,
    active: false,
  },
];

export const individualList = [
  {
    index: 6,
    title: "John 9A",
    time: "01:35 PM",
    message: "Let’s connect today after class..",
    count: 0,
    thumbnail: imageSources.chatDemo1,
    active: false,
  },
  {
    index: 7,
    title: "John 9A",
    time: "01:35 PM",
    message: "Let’s connect today after class..",
    count: 0,
    thumbnail: imageSources.chatDemo1,
    active: false,
  },
  {
    index: 8,
    title: "John 9A",
    time: "01:35 PM",
    message: "Let’s connect today after class..",
    count: 0,
    thumbnail: imageSources.chatDemo1,
    active: false,
  },
];
export const data = [
  {
    index: 1,
    heading: "publicGroups",
    value: publicList,
  },
  {
    index: 2,
    heading: "otherGroups",
    value: otherList,
  },
  {
    index: 3,
    heading: "individualChats",
    value: individualList,
  },
];
