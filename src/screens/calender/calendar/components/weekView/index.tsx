import { weekCardList, weekList } from "@screens/calender/calendar/constants";
import React from "react";
import { Box, HStack } from "react-native-flex-layout";
import WeekCard from "../weekCard";
import WeekDayCard from "../weekDayCard";
import WeekTimeline from "../weekTimeline";
import { useStyles } from "./index.styles";
type WeekViewProps = {
  weekDates: Date[];
  currentDate: Date;
  handleTouch: (item: Date, index: number) => void;
};

const WeekView: React.FC<WeekViewProps> = ({
  weekDates,
  currentDate,
  handleTouch,
}) => {
  const { styles } = useStyles({});
  return (
    <Box style={styles.container}>
      <Box style={styles.bgWeek}>
        <HStack justify="between" style={styles.topWeeks}>
          {weekDates?.map((item, index) => (
            <WeekDayCard
              key={index}
              day={item}
              currentDate={currentDate}
              onPress={() => handleTouch(item, index)}
            />
          ))}
        </HStack>

        <Box style={styles.bgRow}>
          <Box>
            {weekList.map(({ index, startTime, endTime }) => (
              <WeekTimeline
                key={index}
                index={index}
                timeStart={startTime}
                timeEnd={endTime}
              />
            ))}
          </Box>
          <Box style={styles.weekHorizontal}>
            {weekCardList.map(({ index, startTime, endTime, classes }) => (
              <WeekCard
                key={index}
                index={index}
                timeStart={startTime}
                timeEnd={endTime}
                classes={classes}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeekView;
