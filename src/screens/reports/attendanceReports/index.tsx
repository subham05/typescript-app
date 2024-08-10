import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { IconButton } from "@common/components/IconButton";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import i18n from "@common/translation/localization";
import { formatMomentDate } from "@common/utils/dateFormat";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { HStack, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import { useGetAttendanceReportMutation } from "src/store/services/reports";
import AttendanceHeader from "./components/header";
import AttendanceCard from "./components/listCard";
import { useStyles } from "./index.styles";
type AttendanceScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const ReportAttendance: React.FC<AttendanceScreenProps> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [getAttendanceReport, { data }] = useGetAttendanceReportMutation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetchAttendanceReport();
  }, []);
  const fetchAttendanceReport = () => {
    const params = {
      date: "22/02/2024",
    };
    getAttendanceReport(params);
  };

  const formattedMomentDate = formatMomentDate(date, currentLanguage);
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("attendancePage:navigationHeading")}
        RenderRightContainer={() => <IconButton name="search" size={24} />}
      />
      <Animated.FlatList
        onScroll={handleScroll}
        contentContainerStyle={styles.containList}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <Spacer p={8} />}
        data={data?.data ?? []}
        ListHeaderComponent={() => (
          <>
            <AttendanceHeader />
            <HStack style={styles.row} justify="between">
              <TextView variant="bold" style={styles.listHeading}>
                {t("attendancePage:attendanceSummary")}
              </TextView>
              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.filterDate}
              >
                <TextView variant="medium" style={styles.filterText}>
                  {formattedMomentDate}
                </TextView>
                <IconView name="arrow_down" size={24} />
              </TouchableOpacity>
            </HStack>
          </>
        )}
        renderItem={({ item }) => (
          <AttendanceCard
            subject={item.subject}
            percentage={item.percentage}
            totalDays={item.totalDays}
            presentDays={item.presentDays}
            absentDays={item.absentDays}
          />
        )}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </Container>
  );
};

export default ReportAttendance;
