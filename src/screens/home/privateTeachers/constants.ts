import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import { imageSources } from "src/assets/images";

export const filterList: DropdownItemProps[] = [
  { label: "Newest", value: "Newest" },
  { label: "Live", value: "Live" },
];
export const teacherList = [
  {
    index: 1,
    title: "150 hrs of HTML and CSS learning",
    description:
      "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid",
    authorName: "Sheila Naomi",
    time: "from 01/06/2023 • 08:00 AM - 09:00 AM • 150 hrs",
    rating: "4.1",
    price: "$150",
    thumbnail: imageSources.teacherOne,
  },
  {
    index: 2,
    title: "150 hrs of HTML and CSS learning",
    description:
      "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid",
    authorName: "Sheila Naomi",
    time: "from 01/06/2023 • 08:00 AM - 09:00 AM • 150 hrs",
    rating: "4.1",
    price: "$150",
    thumbnail: imageSources.teacherTwo,
  },
];
export const ratingList: DropdownItemProps[] = [
  { label: "Highest", value: "Highest214214214214141" },
  { label: "Average", value: "Average" },
];
export const topicList: DropdownItemProps[] = [
  { label: "All topics", value: "All topics" },
  { label: "Math", value: "Math" },
];
export const sortList: DropdownItemProps[] = [
  { label: "Ascending", value: "Ascending" },
];
