import { ImageProps } from "react-native";

export type ListItem = {
  index?: number;
  subject?: string;
  subjectTag?: string;
  dateFrom?: string;
  dateTo?: string;
  join?: boolean;
  joinAt?: string;
  id?: number;
  thumbnail?: ImageProps;
  duration?: string;
  title?: string;
  time?: string;
  uploadedBy?: string;
  uploadedTime?: string;
  icon?: ImageProps;
  sessions?: number;
  onPress?: () => void;
  onChange?: (id: number, change: string) => void;
};
