import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useStyles } from "./index.styles";
import { Box } from "react-native-flex-layout";
interface dayProps {
  day: Date;
  currentDate: Date;
  onPress?: () => void;
}
const DayCard: React.FC<dayProps> = ({ day, onPress, currentDate }) => {
  const { styles } = useStyles({});
  const formatDate = (date: Date) => {
    return date.getDate();
  };
  const formatDay = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.dayCard}>
      <TextView variant="light" style={styles.day}>
        {formatDay(day)}
      </TextView>
      <Box
        style={[
          styles.selectBox,
          day?.getDate() === currentDate.getDate() && styles.currentDate,
        ]}
      >
        <TextView
          variant="medium"
          style={[
            styles.date,
            day?.getDate() === currentDate.getDate() && styles.currentDateText,
          ]}
        >
          {formatDate(day)}
        </TextView>
      </Box>
    </TouchableOpacity>
  );
};

export default DayCard;
