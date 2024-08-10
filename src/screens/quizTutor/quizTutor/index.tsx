import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import Header from "@common/components/header";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { t } from "i18next";
import React, { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { Box, Flex, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import QuizCard from "./components/quizCard";
import Tab from "./components/tabs";
import {
  SubmissionList,
  courseList,
  liveList,
  offlineList,
  typeList,
} from "./constants";
import { useStyles } from "./index.styles";
import { ListItem } from "./types";

type QuizTutorProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    StackNavigationProp<SignedInStackPrivateParamList>
  >;
};
type DropdownChangeHandler = (item: DropdownItemProps) => void;
const QuizTutor: React.FC<QuizTutorProps> = ({ navigation }) => {
  const { styles } = useStyles({});
  const { scrollY, translateY, handleScroll } = UseScrollAnimation(70);
  const [tab, setTab] = useState(1);
  const [courseDropdown, setCourseDropdown] = useState<string>("Course");
  const [statusDropdown, setStatusDropdown] = useState<string>("Status");
  const [offlineValue, setOfflineValue] = useState(offlineList);
  const [liveValue, setLiveValue] = useState(liveList);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const data = [
    {
      data: courseList,
      value: courseDropdown,
      setter: setCourseDropdown,
    },
    {
      data: typeList,
      value: statusDropdown,
      setter: setStatusDropdown,
    },
  ];
  const handleTabChange = (tab: number) => {
    setTab(tab);
  };
  const combinedData: ListItem[] =
    tab === 1 ? offlineValue : tab === 2 ? liveValue : SubmissionList;
  const renderItem = ({ item, index }: { item: ListItem; index: number }) => {
    switch (tab) {
      case 1:
        return (
          <QuizCard
            thumbnail={item.thumbnail}
            subject={item.subject}
            subjectTag={item.subjectTag}
            submissionDate={item.submissionDate}
            status={item.status}
            onPress={() => toggleChecked(index)}
            onNavigation={() =>
              navigation.navigate("ViewQuizTutor", { live: false })
            }
          />
        );
      case 2:
        return (
          <QuizCard
            thumbnail={item.thumbnail}
            subject={item.subject}
            completed={item.completed}
            startAt={item.startAt}
            status={item.status}
            start={item.start}
            onPress={() => toggleChecked1(index)}
            onNavigation={() =>
              navigation.navigate("ViewQuizTutor", { live: true })
            }
          />
        );
      case 3:
        return (
          <QuizCard
            profilePic={item.profilePic}
            name={item.name}
            subjectTag={item.subjectTag}
            date={item.date}
            submitStatus={item.submitStatus}
            onNavigation={() => navigation.navigate("ViewSubmission")}
          />
        );
      default:
        return null;
    }
  };
  const handleDropdownChange = useCallback(
    (valueSetter: (value: string) => void): DropdownChangeHandler => {
      return (item) => {
        valueSetter(item.value);
      };
    },
    []
  );
  const toggleChecked = (index: number) => {
    setOfflineValue((prevValues) =>
      prevValues.map((value, i) =>
        i === index ? { ...value, status: !value.status } : value
      )
    );
  };
  const toggleChecked1 = (index: number) => {
    setLiveValue((prevValues) =>
      prevValues.map((value, i) =>
        i === index ? { ...value, status: !value.status } : value
      )
    );
  };
  return (
    <Container noSpacing>
      <Header title={"Quiz"} />
      <Tab
        tabLeftName="Offline"
        tabMiddleName="Live"
        tabRightName="Submissions"
        scroll={scrollY}
        onTabChange={handleTabChange}
      />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Flex direction="row" mt={10} style={styles.filterScroll}>
            {data.map(({ data, value, setter }, index) => (
              <FilterDropdown
                key={index}
                data={data}
                placeholder={t("common:select")}
                value={value}
                style={styles.courseFilter}
                onChange={handleDropdownChange(setter)}
              />
            ))}
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
        </StickyHeaderView>
        {/* <QuizLoader /> */}
        <Animated.FlatList
          onScroll={handleScroll}
          contentContainerStyle={styles.containList}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <Spacer p={8} />}
          data={combinedData}
          renderItem={renderItem}
        />
      </Box>

      <PrimaryButton
        title={"Create quiz"}
        style={styles.fab}
        onPress={() => {
          navigation.navigate("CreateQuiz");
        }}
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

export default QuizTutor;
