import { weekCardList, weekList } from "@screens/calender/calendar/constants";
import React from "react";
import { Box, HStack } from "react-native-flex-layout";
import WeekCard from "../weekCard";
import WeekDayCard from "../weekDayCard";
import WeekTimeline from "../weekTimeline";
import { useStyles } from "./index.styles";
import { IconView } from "@common/components/Icon";
import { TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
type WeekViewProps = {
  weekDates: Date[];
  handlePrev: () => void;
  handleNext: () => void;
};
export type DrawerItemNavigationProp = NavigationProp<
  SignedInStackParamList & SignedInStackPrivateParamList
>;
const WeekView: React.FC<WeekViewProps> = ({
  weekDates,
  handlePrev,
  handleNext,
}) => {
  const { styles } = useStyles({});
  const navigation = useNavigation<DrawerItemNavigationProp>();
  return (
    <Box style={styles.container}>
      <Box style={styles.bgWeek}>
        <HStack justify="between">
          <HStack pt={20}>
            <TouchableOpacity style={styles.adjust} onPress={handlePrev}>
              <IconView size={24} name="arrow_left_1" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.adjust} onPress={handleNext}>
              <IconView size={24} name="arrow_right_1" />
            </TouchableOpacity>
          </HStack>
          <HStack justify="between" style={styles.topWeeks}>
            {weekDates?.map((item, index) => (
              <WeekDayCard
                key={index}
                day={item}
                // currentDate={currentDate}
                // onPress={() => handleTouch(item, index)}
              />
            ))}
          </HStack>
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
                onPress={() => navigation.navigate("ScheduleCourseClass")}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeekView;
