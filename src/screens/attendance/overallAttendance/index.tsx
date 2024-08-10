import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import { useGetOverallDetailQuery } from "src/store/services/attendance";
import TimeCard from "./components/timeCard";
import TimeHeader from "./components/timeHeader";
import { useStyles } from "./index.styles";
type OverallAttendanceProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const OverallAttendance: React.FC<OverallAttendanceProps> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const { data } = useGetOverallDetailQuery({ Id: "1" });
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("overallAttendancePage:navigationHeading")}
      />

      <Animated.FlatList
        onScroll={handleScroll}
        data={data?.data.subjectAttendance}
        contentContainerStyle={styles.listContain}
        ItemSeparatorComponent={() => <Spacer pb={32} />}
        ListHeaderComponent={() => (
          <>
            <TimeHeader
              date={data?.data.date}
              timeRange={data?.data.time}
              totalHour={data?.data.totalHr}
              presentHour={data?.data.presentHr}
            />
            <TextView variant="medium" style={styles.listHeading}>
              {t("overallAttendancePage:subjectAttendance")}
            </TextView>
          </>
        )}
        renderItem={({ item }) => (
          <TimeCard
            subject={item.subject}
            startTime={item.startTime}
            endTime={item.endTime}
            presentHour={item.presentHour}
          />
        )}
      />
    </Container>
  );
};

export default OverallAttendance;
