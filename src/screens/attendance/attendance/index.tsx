import { Container } from "@common/components/Container";
import CalendarChange from "@common/components/calendarChange";
import CustomFilterCard from "@common/components/filter/customFilterCard";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import Header from "@common/components/header";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { formatMomentDate, formatMomentYear } from "@common/utils/dateFormat";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import { Box, Flex, HStack, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { useGetAttendanceListMutation } from "src/store/services/attendance";
import HighlightCard from "./components/highlightCard";
import MonthlyCard from "./components/monthlyCard";
import YearlyCard from "./components/yearlyCard";
import { daysNames, dropdownList } from "./constants";
import { useStyles } from "./index.styles";
import AttendanceLoader from "@common/components/skeletonLoaders/attendanceLoader";
type AttendanceScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};

const Attendance: React.FC<AttendanceScreenProps> = ({ navigation }) => {
  const { styles, theme } = useStyles({});
  const { scrollY, translateY, handleScroll } = UseScrollAnimation(70);
  const { t } = useTranslation();
  const {
    palette: {
      background: { main_screen_bg },
    },
  } = theme;
  const [currentYear, setCurrentYear] = useState<string | Date>(
    moment(new Date()).format("YYYY")
  );
  const [currentMonth, setCurrentMonth] = useState<string | Date>(
    moment(new Date()).format("YYYY-MM-DD")
  );

  const [change, setChange] = useState<string>("Yearly");

  const goPrevYear = () => {
    setCurrentYear((prev) => moment(prev).subtract(1, "year").format("YYYY"));
  };

  const goNextYear = () => {
    setCurrentYear((prev) => moment(prev).add(1, "year").format("YYYY"));
  };
  const goPrevMonth = () => {
    setCurrentMonth((prev) =>
      moment(prev).subtract(1, "month").format("YYYY-MM-DD")
    );
  };

  const goNextMonth = () => {
    setCurrentMonth((prev) =>
      moment(prev).add(1, "month").format("YYYY-MM-DD")
    );
  };
  const [getAttendanceList, { data, isLoading }] =
    useGetAttendanceListMutation();
  useEffect(() => {
    fetchAttendanceList();
  }, [currentYear, change, currentMonth]);
  const fetchAttendanceList = () => {
    const params = {
      type: change,
      date: change == "Yearly" ? currentYear : currentMonth,
    };
    getAttendanceList(params);
  };

  const formattedMomentYear = formatMomentYear(currentYear);
  const formattedMomentDate = formatMomentDate(currentMonth);
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("attendanceCalendarPage:navigationHeading")}
      />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Flex ph={20} direction="row" justify="between">
            <CalendarChange
              date={
                change === "Yearly" ? formattedMomentYear : formattedMomentDate
              }
              handlePrev={() => {
                change === "Yearly" ? goPrevYear() : goPrevMonth();
              }}
              handleNext={() => {
                change === "Yearly" ? goNextYear() : goNextMonth();
              }}
            />
            <FilterDropdown
              containerStyle={styles.customDropStyle}
              style={styles.filter}
              data={dropdownList}
              placeholder={t("common:select")}
              value={change}
              onChange={(item) => {
                setChange(item.value);
              }}
              renderItem={(item) => <CustomFilterCard title={item.label} />}
            />
          </Flex>
        </StickyHeaderView>
        {isLoading ? (
          <AttendanceLoader />
        ) : (
          <Animated.FlatList
            onScroll={handleScroll}
            data={[1]}
            contentContainerStyle={styles.contain}
            ListHeaderComponent={() => (
              <>
                <HStack justify="between">
                  <HighlightCard
                    type="HOUR"
                    value={data?.data.totalPresentHour}
                  />
                  <HighlightCard
                    type="ATTENDANCE"
                    value={data?.data.attendancePercent}
                  />
                </HStack>
                <TextView variant="bold" style={styles.header}>
                  {t("attendanceCalendarPage:attendanceSummary")}
                </TextView>
              </>
            )}
            renderItem={() => {
              return change === "Yearly" ? (
                <FlatList
                  data={data?.data.attendanceSummary ?? []}
                  numColumns={3}
                  columnWrapperStyle={styles.columnStyle}
                  ItemSeparatorComponent={() => <Spacer pb={8} />}
                  renderItem={({ item }) => (
                    <YearlyCard
                      month={item.name}
                      percentage={item.percentage}
                      hour={item.hour}
                      present={item.present}
                      onPress={() => setChange("Monthly")}
                    />
                  )}
                />
              ) : (
                <>
                  <Flex direction="row" justify="around" mt={16} mb={12}>
                    {daysNames.map((item, index) => (
                      <TextView key={index} style={styles.dayHeader}>
                        {item.name}
                      </TextView>
                    ))}
                  </Flex>
                  <Calendar
                    initialDate={moment(currentMonth).format("YYYY-MM-DD")}
                    theme={{
                      weekVerticalMargin: 0,
                      calendarBackground: main_screen_bg,
                    }}
                    style={styles.bg}
                    headerStyle={styles.headerCalendar}
                    dayComponent={(day) => {
                      const dayData = data?.data.attendanceSummary.find(
                        (item) => item?.date === day?.date?.dateString
                      );
                      return (
                        <MonthlyCard
                          onPress={() =>
                            navigation.navigate("OverallAttendance")
                          }
                          current={currentMonth}
                          day={day.children}
                          date={day?.date?.dateString}
                          percentage={dayData ? dayData.percentage : 0} // Default to 0 if not found
                          // Pass the found data object to MonthlyCard
                        />
                      );
                    }}
                  />
                </>
              );
            }}
          />
        )}
      </Box>
    </Container>
  );
};

export default Attendance;
