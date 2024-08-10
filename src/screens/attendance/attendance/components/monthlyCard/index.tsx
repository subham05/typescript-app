import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useStyles } from "./index.styles";
import { Box } from "react-native-flex-layout";

type recordingProps = {
  index?: number;
  day?: React.ReactNode;
  date?: Date | string;
  current?: Date | string;
  percentage: number;
  onPress?: () => void;
};
const MonthlyCard: React.FC<recordingProps> = ({
  day,
  date,
  current,
  percentage,
  onPress,
}) => {
  const { styles } = useStyles({});
  let show;
  if (current != undefined && date != undefined) {
    const currentDate = new Date(current);
    const dateToCheck = new Date(date);
    if (dateToCheck.getMonth() === currentDate.getMonth()) {
      show = true;
    } else {
      show = false;
    }
  }

  const inputDate = new Date(date != undefined ? date : Date.now());
  const dayOfWeek = inputDate.getDay();
  return (
    <Box style={styles.cardContain}>
      {show && (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.card, dayOfWeek === 0 && styles.weekDayStyle]}
        >
          <TextView
            variant="light"
            style={[styles.dayText, !show && styles.faded]}
          >
            {day}
          </TextView>
          {dayOfWeek !== 0 && (
            <>
              <TextView style={styles.percentage} variant="medium">
                {percentage}%
              </TextView>
              <Box style={styles.bar}>
                <Box
                  style={[
                    styles.width,
                    percentage < 70 && styles.average,
                    percentage < 30 && styles.bad,
                    { width: `${percentage}%` },
                  ]}
                />
              </Box>
            </>
          )}
        </TouchableOpacity>
      )}
    </Box>
  );
};

export default MonthlyCard;
