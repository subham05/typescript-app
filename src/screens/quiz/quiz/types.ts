import { ImageProps } from "react-native";

export type ListItem = {
  index?: number;
  subject?: string;
  subjectTag?: string;
  submissionDate?: string;
  join?: boolean;
  status?: string;
  thumbnail?: ImageProps;
};
export type homeworkProps = {
  text?: string;
  onPress?: () => void;
};
