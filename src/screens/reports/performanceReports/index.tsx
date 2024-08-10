import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
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
import { useGetPerformanceReportQuery } from "src/store/services/reports";
import PerformanceHeader from "./components/header";
import PerformanceCard from "./components/listCard";
import { useStyles } from "./index.styles";
type ReportScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const ReportPerformance: React.FC<ReportScreenProps> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const { data } = useGetPerformanceReportQuery();

  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("reportPage:navigationHeading")}
        RenderRightContainer={() => <IconButton name="search" size={24} />}
      />
      <Animated.FlatList
        onScroll={handleScroll}
        contentContainerStyle={styles.containList}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <Spacer p={8} />}
        data={data?.data.list}
        ListHeaderComponent={() => (
          <>
            <PerformanceHeader
              grade={data?.data.grade}
              percentage={data?.data.percentage ?? 0}
              comment={data?.data.comment}
            />
            <TextView variant="bold" style={styles.listHeading}>
              {t("reportPage:performanceReport")}
            </TextView>
          </>
        )}
        renderItem={({ item }) => (
          <PerformanceCard
            subject={item.subject}
            remark={item.remark}
            date={item.date}
            grade={item.grade}
          />
        )}
      />
    </Container>
  );
};

export default ReportPerformance;
