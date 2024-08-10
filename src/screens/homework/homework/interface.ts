export interface ListItem {
  index?: number;
  subject?: string;
  subjectTag?: string;
  submissionDate?: string;
  join?: boolean;
  status?: string;
}
export interface homeworkProps {
  text?: string;
  onPress?: () => void;
}
