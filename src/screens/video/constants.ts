import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import { imageSources } from "src/assets/images";

export const videoURL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4";

export const videoCardData = [
  {
    thumbnail: imageSources.demo,
    duration: "32:49",
    title: "Communication skill",
    time: "11:39 AM",
    uploadedBy: "Arlene McCoy",
    uploadedTime: "20/04/2023",
  },
  {
    thumbnail: imageSources.demo,
    duration: "32:49",
    title: "Communication skill",
    time: "11:39 AM",
    uploadedBy: "Arlene McCoy",
    uploadedTime: "20/04/2023",
  },
  {
    thumbnail: imageSources.demo,
    duration: "32:49",
    title: "Communication skill",
    time: "11:39 AM",
    uploadedBy: "Arlene McCoy",
    uploadedTime: "20/04/2023",
  },
];
export const questionData = [
  {
    thumbnail: imageSources.demo,
    name: "Sheila duke",
    Question: "What is supernovas of high-mass stars?",
    time: "23/04/2023, 12:45 pm ",
    answer: true,
    answers: [
      {
        thumbnail: imageSources.demo,
        name: "Sheila duke",
        answer:
          "High-mass stars die in spectacular explosions called supernovas. A supernova spews more than 90 percent of the star's mass, including the newly formed heavy elements, out into the galaxy.",
        time: "23/04/2023, 12:45 pm ",
      },
    ],
  },
  {
    thumbnail: imageSources.demo,
    name: "Sheila duke",
    Question: "What is supernovas of high-mass stars?",
    time: "23/04/2023, 12:45 pm ",
    answer: false,
    answers: [],
  },
  {
    thumbnail: imageSources.demo,
    name: "Sheila duke",
    Question: "What is supernovas of high-mass stars?",
    time: "23/04/2023, 12:45 pm ",
    answer: true,
    answers: [
      {
        thumbnail: imageSources.demo,
        name: "Sheila duke",
        answer:
          "High-mass stars die in spectacular explosions called supernovas. A supernova spews more than 90 percent of the star's mass, including the newly formed heavy elements, out into the galaxy.",
        time: "23/04/2023, 12:45 pm ",
      },
    ],
  },
];
export const recordDrop: DropdownItemProps[] = [
  { label: "Sort by date", value: "Sort by date" },
  { label: "Sort by timestamps", value: "Sort by timestamps" },
  { label: "Show answered", value: "Show answered" },
  { label: "Show unanswered", value: "Show unanswered" },
  { label: "Show all", value: "Show all" },
];
export const descriptionData = {
  title: "Webinar - Stellar astronomy",
  description:
    "Stellar astronomy studies the life cycle and structure of stars, both as individuals and as populations.",
  otherDetails: "Arlene McCoy 20/04/2023 ; 11:39 AM",
};
