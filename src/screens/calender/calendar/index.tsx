import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
import { PrimaryButton } from "@common/components/buttons/primaryButton";
import CalendarChange from "@common/components/calendarChange";
import CustomFilterCard from "@common/components/filter/customFilterCard";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import Header from "@common/components/header";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import {
  formatDate,
  formatMomentDate,
  formatWeekString,
} from "@common/utils/dateFormat";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { Box, Flex } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import DayView from "./components/dayView";
import MonthView from "./components/monthView";
import WeekView from "./components/weekView";
import { subjectList } from "./constants";
import { useStyles } from "./index.styles";
type CalendarScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    StackNavigationProp<SignedInStackPrivateParamList>
  >;
};

const Calender: React.FC<CalendarScreenProps> = ({ navigation }) => {
  const { styles } = useStyles({});
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { scrollY, translateY, handleScroll } = UseScrollAnimation(70);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentDate1, setCurrentDate1] = useState<string | Date>(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [dates, setDates] = useState<Array<Date>>([]);
  const [weekDates, setWeekDates] = useState<Array<Date>>([]);
  const [dateInfo, setDateInfo] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    weekNumber: 1,
  });

  const flatListRef = useRef<FlatList<Date>>(null);
  const [change, setChange] = useState<string>("Day");
  useEffect(() => scrollToIndex(new Date(currentDate).getDate() - 1), []);
  useEffect(() => {
    generateMonthDates(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  useEffect(() => {
    generateMonthWeekDates();
  }, [dateInfo]);

  const generateMonthDates = (year: number, month: number) => {
    const lastDay = new Date(year, month, 0);
    const numberOfDays = lastDay.getDate();

    const newDates = Array.from({ length: numberOfDays }, (_, index) => {
      return new Date(year, month - 1, index + 1);
    });

    setDates(newDates);
  };
  const handleNextDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    if (nextDate.getMonth() !== currentDate.getMonth()) {
      nextDate.setDate(1);
      nextDate.setMonth(nextDate.getMonth());
      setCurrentMonth(nextDate.getMonth() + 1);
      setCurrentYear(nextDate.getFullYear());
    }

    setCurrentDate(nextDate);
    scrollToIndex(nextDate.getDate() - 1);
  };

  const handlePrevDate = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 1);

    if (prevDate.getMonth() !== currentDate.getMonth()) {
      prevDate.setDate(
        new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 0).getDate()
      );
      prevDate.setMonth(prevDate.getMonth());
      setCurrentMonth(prevDate.getMonth() - 1);
      setCurrentYear(prevDate.getFullYear());
    }

    setCurrentDate(prevDate);
    scrollToIndex(prevDate.getDate() - 1);
  };
  const scrollToIndex = (index: number) => {
    setTimeout(
      () =>
        flatListRef?.current?.scrollToIndex({
          animated: true,
          index: Number(index),
        }),
      500
    );
  };
  const handleTouch = (item: Date, index: number) => {
    setCurrentDate(item);
    scrollToIndex(index);
  };
  const handleTouchWeek = (item: Date) => {
    setCurrentDate(item);
  };

  const goPrevMonth = () => {
    setCurrentDate1((prev) =>
      moment(prev).subtract(1, "month").format("YYYY-MM-DD")
    );
  };

  const goNextMonth = () => {
    setCurrentDate1((prev) =>
      moment(prev).add(1, "month").format("YYYY-MM-DD")
    );
  };
  const formattedDate = formatDate(currentDate, currentLanguage);
  const formattedMomentDate = formatMomentDate(currentDate1, currentLanguage);

  // -----------------------------------------Week change-----------------------------------//

  const generateMonthWeekDates = () => {
    const { year, month, weekNumber } = dateInfo;
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysOffset = ((7 - firstDayOfWeek) % 7) + 7 * (weekNumber - 1);
    const startDate = new Date(year, month - 1, 1 + daysOffset);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    if (endDate.getDate() > lastDayOfMonth) {
      endDate.setDate(lastDayOfMonth);
    }
    const newWeekDates = [];
    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      newWeekDates.push(new Date(date));
    }
    setWeekDates(newWeekDates);
  };

  const nextWeek = () => {
    const { year, month, weekNumber } = dateInfo;
    const numWeeksInMonth = getNumberOfWeeksInMonth(year, month);
    if (weekNumber === numWeeksInMonth) {
      const nextMonth = month === 12 ? 1 : month + 1;
      const nextYear = month === 12 ? year + 1 : year;
      setDateInfo({ year: nextYear, month: nextMonth, weekNumber: 1 });
    } else {
      setDateInfo((prevDateInfo) => ({
        ...prevDateInfo,
        weekNumber: prevDateInfo.weekNumber + 1,
      }));
    }
  };

  const prevWeek = () => {
    const { year, month, weekNumber } = dateInfo;
    if (weekNumber === 1) {
      const prevMonth = month === 1 ? 12 : month - 1;
      const prevYear = month === 1 ? year - 1 : year;
      const prevWeekNumber = getNumberOfWeeksInMonth(prevYear, prevMonth);
      setDateInfo({
        year: prevYear,
        month: prevMonth,
        weekNumber: prevWeekNumber,
      });
    } else {
      setDateInfo((prevDateInfo) => ({
        ...prevDateInfo,
        weekNumber: prevDateInfo.weekNumber - 1,
      }));
    }
  };

  const getNumberOfWeeksInMonth = (year: number, month: number) => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const daysOffset = ((7 - firstDayOfMonth.getDay()) % 7) + 1;
    return Math.ceil((daysInMonth + daysOffset) / 7);
  };
  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentWeekNumber = getWeekNumber(currentDate);
    setDateInfo({
      year: currentYear,
      month: currentMonth,
      weekNumber: currentWeekNumber,
    });
  }, []);
  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear =
      (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };
  // -----------------------------------------Week change-----------------------------------//
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        navigationType="DRAWER"
        title={t("calendarPage:navigationHeading")}
        RenderRightContainer={() => (
          <IconButton
            name="notification"
            onPress={() => navigation.navigate("Notification")}
            size={24}
            batchSHow={true}
          />
        )}
      />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Flex ph={20} direction="row" justify="between">
            <CalendarChange
              date={
                change == "Day"
                  ? formattedDate
                  : change == "Week"
                  ? formatWeekString(
                      weekDates[0],
                      weekDates[weekDates.length - 1]
                    )
                  : formattedMomentDate
              }
              handlePrev={() => {
                change == "Day" && handlePrevDate();
                change == "Week" && prevWeek();
                change == "Month" && goPrevMonth();
              }}
              handleNext={() => {
                change == "Day" && handleNextDate();
                change == "Week" && nextWeek();
                change == "Month" && goNextMonth();
              }}
            />
            <FilterDropdown
              containerStyle={styles.customDropStyle}
              style={styles.filter}
              data={subjectList}
              placeholder={t("common:select")}
              value={change}
              renderItem={(item) => <CustomFilterCard title={item.label} />}
              onChange={(item) => {
                setChange(item.value);
              }}
            />
          </Flex>
        </StickyHeaderView>

        <Animated.FlatList
          data={[1]}
          contentContainerStyle={styles.mainContainer}
          onScroll={handleScroll}
          renderItem={() =>
            change === "Day" ? (
              <DayView
                dates={dates}
                currentDate={currentDate}
                flatListRef={flatListRef}
                handleTouch={handleTouch}
              />
            ) : change === "Week" ? (
              <WeekView
                weekDates={weekDates}
                currentDate={currentDate}
                handleTouch={handleTouchWeek}
              />
            ) : (
              <MonthView currentDate1={currentDate1} />
            )
          }
        />
      </Box>
      <PrimaryButton
        width={92}
        title={"Schedule class"}
        style={styles.fab}
        onPress={() =>
          navigation.navigate("ScheduleClass", { Reschedule: true })
        }
      />
    </Container>
  );
};

export default Calender;
