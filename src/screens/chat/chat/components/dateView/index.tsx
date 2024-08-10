import { TextView } from "@common/components/textView";
import React from "react";
import { useStyles } from "./index.styles";

interface DateViewProps {
  day: string;
}
export const DateView: React.FC<DateViewProps> = ({ day }) => {
  const { styles } = useStyles({});
  return (
    <TextView variant="light" style={styles.renderDay}>
      {day}
    </TextView>
  );
};
