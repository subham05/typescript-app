import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useStyles } from "./index.styles";

import DayMonthClassCard from "../dayMonthClassCard";
import { classesList } from "../../constants";

type recordingProps = {
  index?: number;
  day?: React.ReactNode;
  date?: Date | string;
  current?: Date | string;
};
const DayMonthCard: React.FC<recordingProps> = ({ day, date, current }) => {
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
  const data = classesList.slice(0, 2);
  const remainingLength = classesList.length - data.length;
  return (
    <TouchableOpacity style={styles.cardContain}>
      <TextView
        style={[styles.dayText, !show && styles.faded]}
        variant="regular"
      >
        {day}
      </TextView>
      {dayOfWeek != 0 && show && (
        <>
          {data?.map((item) => (
            <DayMonthClassCard
              key={item.index}
              name={item.name}
              color={item.color}
              bgColor={item.bgColor}
            />
          ))}
          <TextView style={styles.more}>+{remainingLength} more</TextView>
        </>
      )}
    </TouchableOpacity>
  );
};

export default DayMonthCard;
