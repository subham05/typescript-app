import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import { imageSources } from "src/assets/images";

export const filterList: DropdownItemProps[] = [
  { label: "Newest", value: "Newest" },
  { label: "Live", value: "Live" },
];
export const announcementList = [
  {
    index: 1,
    title: "Submit birth certificate",
    description:
      "Attention Students! 📢Please submit your birth certificates to the school office on or before 23/06/2023. This is a mandatory requirement for all students. Ensure timely submission to avoid any inconvenience. Thank you for your cooperation. ",
    linkTitle: "Visit the link to fill the form",
    link: "https://www.homeducation.com/course/grade/students/?fillform",
    poster: undefined,
    file: "Rise of titans and their..",
  },
  {
    index: 2,
    title: "Enroll in sports",
    description:
      "📣 Attention all students! 📣Don't miss out on the excitement of Sports Day! 🏆 Today is the LAST day to enroll and be a part of this thrilling event. Lace up those sneakers, choose your team, and sign up at the school office before it's too late. Let's show our spirit and make this Sports ",
    linkTitle: "Visit the link to fill the form",
    link: "https://www.homeducation.com/course/grade/students/?fillform",
    poster: imageSources.announcementTwo,
    file: undefined,
  },
  {
    index: 3,
    title: "Submit birth certificate",
    description:
      "Attention Students! 📢Please submit your birth certificates to the school office on or before 23/06/2023. This is a mandatory requirement for all students. Ensure timely submission to avoid any inconvenience. Thank you for your cooperation. ",
    linkTitle: "Visit the link to fill the form",
    link: "https://www.homeducation.com/course/grade/students/?fillform",
    poster: undefined,
    file: undefined,
  },
  {
    index: 4,
    title: "Submit birth certificate",
    description:
      "Attention Students! 📢Please submit your birth certificates to the school office on or before 23/06/2023. This is a mandatory requirement for all students. Ensure timely submission to avoid any inconvenience. Thank you for your cooperation. ",
    linkTitle: "Visit the link to fill the form",
    link: "https://www.homeducation.com/course/grade/students/?fillform",
    poster: imageSources.announcementOne,
    file: undefined,
  },
];
