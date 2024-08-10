import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { IconButton } from "@common/components/IconButton";
import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import Header from "@common/components/header";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import Tab from "@common/components/topTabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { Box, Flex, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import CourseCard from "./components/courseCard";
import RecordingCard from "./components/recordingCard";
import {
  courseFilter,
  coursesList,
  subjectList,
  videoCardData,
} from "./constants";
import { useStyles } from "./index.styles";
import { ListItem } from "./types";
type HomeworkScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackPrivateParamList>,
    StackNavigationProp<SignedInStackParamList>
  >;
};
const CoursesHourly: React.FC<HomeworkScreenProps> = ({ navigation }) => {
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
  const handleRecordingCardChange = () => {};
  const combinedData: ListItem[] = tab === 1 ? coursesList : videoCardData;
  const renderItem = ({ item }: { item: ListItem; index: number }) => {
    return tab === 1 ? (
      <CourseCard
        onPress={() => navigation.navigate("CourseView")}
        subject={item.subject}
        subjectTag={item.subjectTag}
        dateFrom={item.dateFrom}
        dateTo={item.dateTo}
        join={item.join}
        joinAt={item.joinAt}
        session={item.sessions}
        icon={item.icon}
      />
    ) : (
      <RecordingCard
        id={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        duration={item.duration}
        time={item.time}
        uploadedBy={item.uploadedBy}
        uploadedTime={item.uploadedTime}
        onChange={handleRecordingCardChange}
        onPress={() => navigation.navigate("Video", { recording: true })}
      />
    );
  };

  return (
    <Container noSpacing>
      <Header
        navigationType="DRAWER"
        title={t("coursesPage:navigationHeading")}
        RenderRightContainer={() => (
          <IconButton
            name="search"
            size={24}
            onPress={() => navigation.navigate("Search")}
          />
        )}
      />
      <Tab
        tabLeftName={t("coursesPage:listCourses")}
        tabRightName={t("coursesPage:recordings")}
        scroll={scrollY}
        onTabChange={handleTabChange}
      />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Flex direction="row" mt={10} style={styles.recording}>
            {tab === 1 ? (
              <FilterDropdown
                style={styles.subjectFilter}
                data={courseFilter}
                containerStyle={styles.custom}
                placeholder={t("common:select")}
                value={dropdownValue}
                onChange={(item) => {
                  setDropdownValue(item.value);
                }}
              />
            ) : (
              <Flex direction="row">
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
                    {t("homeworkPage:date")}
                  </TextView>
                  <IconView name="calendar" size={18} />
                </TouchableOpacity>
              </Flex>
            )}
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
      <PrimaryButton
        title={"Add new course"}
        style={styles.fab}
        iconProps={{ name: "Add" }}
        onPress={() => navigation.navigate("ScheduleCourse")}
      />
    </Container>
  );
};

export default CoursesHourly;
