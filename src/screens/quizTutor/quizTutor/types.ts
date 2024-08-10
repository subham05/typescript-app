import { ImageProps } from "react-native";

export type ListItem = {
  index?: number;
  name?: string;
  subject?: string;
  subjectTag?: string;
  startAt?: string;
  completed?: boolean;
  start?: boolean;
  status?: boolean;
  thumbnail?: ImageProps;
  submissionDate?: string;
  date?: string;
  submitStatus?: string;
  profilePic?: ImageProps;
};
