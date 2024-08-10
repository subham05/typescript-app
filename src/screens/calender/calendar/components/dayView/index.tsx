import CalendarDateLoader from "@common/components/skeletonLoaders/calendarLoader/dateLoader";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { agendaList } from "@screens/calender/calendar/constants";
import React from "react";
import { FlatList } from "react-native";
import { Box } from "react-native-flex-layout";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import AgendaCard from "../agendaCard";
import AgendaHead from "../agendaHeader";
import DayCard from "../dayCard";
import { useStyles } from "./index.styles";

type DayViewProps = {
  currentDate: Date;
  dates: Date[];
  handleTouch: (item: Date, index: number) => void;
  flatListRef: React.MutableRefObject<FlatList<Date> | null>;
};
type DayNavigationProp = NavigationProp<SignedInStackParamList>;
const DayView: React.FC<DayViewProps> = ({
  dates,
  currentDate,
  handleTouch,
  flatListRef,
}) => {
  const { styles } = useStyles({});

  const navigation = useNavigation<DayNavigationProp>();
  return (
    <Box style={styles.contain}>
      {dates.length > 0 ? (
        <FlatList
          onScrollToIndexFailed={(info) => {
            const wait = new Promise((resolve) => setTimeout(resolve, 400));
            wait.then(() => {
              flatListRef.current?.scrollToIndex({
                index: info.index,
                animated: true,
              });
            });
          }}
          ref={flatListRef}
          contentContainerStyle={styles.daysContainer}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dates}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <DayCard
              day={item}
              currentDate={currentDate}
              onPress={() => handleTouch(item, index)}
            />
          )}
        />
      ) : (
        <CalendarDateLoader />
      )}

      {/* <AgendaLoader /> */}

      <Box style={styles.container}>
        <FlatList
          data={agendaList}
          ListHeaderComponent={() => (
            <AgendaHead classes={5} dateCurrent={currentDate} />
          )}
          renderItem={({ item, index }) => (
            <AgendaCard
              index={index}
              subject={item.subject}
              timeStart={item.startTime}
              timeEnd={item.endTime}
              thumbnail={item.thumbnail}
              joinTime={item.joinAt}
              join={item.join}
              completed={item.completed}
              completedTime={item.completedTime}
              onPress={() => navigation.navigate("ViewSchedule")}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default DayView;
