import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import { imageSources } from "src/assets/images";

export const videoCardData = [
  {
    id: 1,
    thumbnail: imageSources.demoRecording1,
    duration: "32:49",
    title: "Communication skill",
    time: "11:39 AM",
    uploadedBy: "Arlene McCoy",
    uploadedTime: "20/04/2023",
  },
  {
    id: 2,
    thumbnail: imageSources.demoRecording2,
    duration: "32:49",
    title: "Communication skill",
    time: "11:39 AM",
    uploadedBy: "Arlene McCoy",
    uploadedTime: "20/04/2023",
  },
  {
    id: 3,
    thumbnail: imageSources.teacherOne,
    duration: "32:49",
    title: "Communication skill",
    time: "11:39 AM",
    uploadedBy: "Arlene McCoy",
    uploadedTime: "20/04/2023",
  },
];
export const filterList: DropdownItemProps[] = [
  { label: "All subjects", value: "All subjects" },
  { label: "Live", value: "Live" },
];
export const recordDrop: DropdownItemProps[] = [
  { label: "Share", value: "Share" },
  { label: "Download", value: "Download" },
];
