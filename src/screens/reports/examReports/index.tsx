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
import { HStack, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import { useGetExamReportQuery } from "src/store/services/reports";
import ExamHeader from "./components/header";
import ExamCard from "./components/listCard";
import { useStyles } from "./index.styles";
type ReportScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const ExamReport: React.FC<ReportScreenProps> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const { data } = useGetExamReportQuery();
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("examPage:navigationHeading")}
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
            <ExamHeader
              name={data?.data.name}
              grade={data?.data.grade}
              roll={data?.data.roll}
              studentId={data?.data.studentId}
              totalMarks={data?.data.totalMarks}
              result={data?.data.result}
              remark={data?.data.remark}
            />
            <TextView variant="bold" style={styles.listHeading}>
              {t("examPage:examReport")}
            </TextView>
            <HStack pv={18}>
              <TextView style={styles.fit}>{t("examPage:subject")}</TextView>
              <TextView style={styles.fit}>
                {t("examPage:marksObtained")}
              </TextView>
              <TextView style={styles.fit}>{t("examPage:totalMarks")}</TextView>
              <TextView style={styles.fit1} numberOfLines={1}>
                {t("examPage:percentage")}
              </TextView>
              <TextView style={styles.fit1}>{t("examPage:result")}</TextView>
            </HStack>
          </>
        )}
        renderItem={({ item }) => (
          <ExamCard
            subject={item.subject}
            totalMarks={item.totalMarks}
            marksObtain={item.markObtain}
            percentage={item.percentage}
            result={item.result}
          />
        )}
      />
    </Container>
  );
};

export default ExamReport;
