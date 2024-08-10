import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { Box, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import HeaderCard from "./components/headerCard";
import WeekView from "./components/weekView";
import { useStyles } from "./index.styles";

const ScheduleCourse = () => {
  const { styles } = useStyles({});

  const { scrollY, handleScroll } = UseScrollAnimation();
  const { t } = useTranslation();
  const [selected, setSelected] = useState(1);
  const [weekDates, setWeekDates] = useState<Array<Date>>([]);
  const [dateInfo, setDateInfo] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    weekNumber: Math.floor(new Date().getDate() / 7),
  });
  useEffect(() => {
    generateMonthWeekDates();
  }, [dateInfo]);
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
  const getNumberOfWeeksInMonth = (year: number, month: number) => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const daysOffset = ((7 - firstDayOfMonth.getDay()) % 7) + 1;
    return Math.ceil((daysInMonth + daysOffset) / 7);
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
  const handleValue = (num: number) => {
    setSelected(num);
  };
  return (
    <Container noSpacing>
      <Header title={"Schedule course"} scroll={scrollY} />
      <Animated.FlatList
        onScroll={handleScroll}
        data={[1]}
        ListHeaderComponent={() => (
          <HeaderCard handlePress={handleValue} value={selected} />
        )}
        contentContainerStyle={styles.listContain}
        ItemSeparatorComponent={() => <Spacer pb={12} />}
        renderItem={() => (
          <WeekView
            handleNext={nextWeek}
            handlePrev={prevWeek}
            weekDates={weekDates}
          />
        )}
      />
      <Box style={styles.fixed} ph={20}>
        <TouchableOpacity style={styles.secondaryBtn}>
          <TextView variant="medium" style={styles.secondaryTxt}>
            {t("common:cancel")}
          </TextView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.primaryBtn}>
          <TextView variant="medium" style={styles.primaryTxt}>
            {"Create schedule"}
          </TextView>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default ScheduleCourse;
