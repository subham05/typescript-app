import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useStyles } from "./index.styles";
import { Box } from "react-native-flex-layout";
interface dayProps {
  day: Date;
  // currentDate: Date;
  onPress?: () => void;
}
const DayCard: React.FC<dayProps> = ({ day, onPress }) => {
  const { styles } = useStyles({});
  const formatDate = (date: Date) => {
    return date.getDate();
  };
  const formatDay = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.dayCard}>
      <Box style={styles.selectBox}>
        <TextView variant="medium" style={styles.date}>
          {formatDate(day)}
        </TextView>
      </Box>
      <TextView variant="light" style={styles.day}>
        {formatDay(day)}
      </TextView>
    </TouchableOpacity>
  );
};

export default DayCard;
