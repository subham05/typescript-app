import React, { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import { IconView } from "../Icon";
import { TextView } from "../textView";
import { useStyles } from "./index.styles";

interface CalendarChangeProps {
  date: ReactNode;
  handlePrev: () => void;
  handleNext: () => void;
}

const CalendarChange: React.FC<CalendarChangeProps> = ({
  handlePrev,
  handleNext,
  date,
}) => {
  const { styles } = useStyles({});
  return (
    <View style={styles.calendarChange}>
      <TextView variant="medium" style={styles.calendarDate}>
        {date}
      </TextView>
      <TouchableOpacity style={styles.adjust} onPress={handlePrev}>
        <IconView size={24} name="arrow_left_1" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.adjust} onPress={handleNext}>
        <IconView size={24} name="arrow_right_1" />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarChange;
