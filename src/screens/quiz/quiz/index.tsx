import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import Header from "@common/components/header";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import Tab from "@common/components/topTabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { Box, Flex, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import Course from "./components/quizCard";
import { offlineList, onlineList, subjectList } from "./constants";
import { useStyles } from "./index.styles";
import { ListItem } from "./types";
type QuizScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackPrivateParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const Quiz: React.FC<QuizScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  const [tab, setTab] = useState(1);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const { scrollY, translateY, handleScroll } = UseScrollAnimation(122);
  const handleTabChange = (tab: number) => {
    setTab(tab);
  };
  const [dropdownValue, setDropdownValue] = useState<string>();
  const combinedData: ListItem[] = tab === 1 ? offlineList : onlineList;
  const renderItem = ({ item }: { item: ListItem; index: number }) => {
    return (
      <Course
        onPress={() =>
          navigation.navigate("ViewQuiz", { view: tab === 1 ? false : true })
        }
        subject={item.subject}
        subjectTag={item.subjectTag}
        submissionDate={item.submissionDate}
        join={item.join}
        status={item.status}
        thumbnail={item.thumbnail}
      />
    );
  };

  return (
    <Container noSpacing>
      <Header title={t("quizPage:navigationHeading")} />
      <Tab
        tabLeftName={t("quizPage:offline")}
        tabRightName={t("quizPage:live")}
        scroll={scrollY}
        onTabChange={handleTabChange}
      />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Flex direction="row" mt={10} style={styles.recording}>
            <FilterDropdown
              style={styles.subjectFilter}
              data={subjectList}
              placeholder={t("common:select")}
              value={dropdownValue}
              onChange={(item) => {
                setDropdownValue(item.value);
              }}
            />
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.filterRecording}
            >
              <TextView style={styles.filterText}>
                {t("quizPage:date")}
              </TextView>
              <IconView name="calendar" size={18} />
            </TouchableOpacity>
          </Flex>
        </StickyHeaderView>

        <Animated.FlatList
          onScroll={handleScroll}
          contentContainerStyle={styles.containList}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <Spacer p={8} />}
          data={combinedData}
          renderItem={renderItem}
        />
      </Box>
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

export default Quiz;
