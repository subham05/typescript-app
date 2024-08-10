import { TextView } from "@common/components/textView";
import { DateTimeFormats } from "@common/utils/dateFormat/dateTimeFormats";
import { daysNames } from "@screens/calender/calendar/constants";
import moment from "moment";
import React from "react";
import { I18nManager } from "react-native";
import { Calendar } from "react-native-calendars";
import { Box, Flex } from "react-native-flex-layout";
import { FlatList } from "react-native-gesture-handler";
import DayMonthCard from "../dayMonthCard";
import { useStyles } from "./index.styles";
type MonthViewProps = {
  currentDate1: string | Date;
};
const MonthView: React.FC<MonthViewProps> = ({ currentDate1 }) => {
  const { styles } = useStyles({});

  return (
    <FlatList
      data={[1]}
      ListHeaderComponent={() => (
        <Flex direction="row" justify="around" mt={27} mb={12} ph={10}>
          {daysNames.map((item) => (
            <TextView key={item.index} style={styles.dayHeader}>
              {item.name}
            </TextView>
          ))}
        </Flex>
      )}
      renderItem={() => (
        <Box style={styles.bottomGap}>
          <Box ph={6}>
            <Calendar
              initialDate={
                I18nManager.isRTL
                  ? "2024-05-23"
                  : moment(currentDate1).format(DateTimeFormats.YearMonthDay)
              }
              theme={{
                weekVerticalMargin: 0,
              }}
              style={styles.bg}
              headerStyle={styles.header}
              dayComponent={(day) => (
                <DayMonthCard
                  current={currentDate1}
                  day={day.children}
                  date={day?.date?.dateString}
                />
              )}
              // onDayPress={(day) => {}}
            />
          </Box>
        </Box>
      )}
    />
  );
};

export default MonthView;
