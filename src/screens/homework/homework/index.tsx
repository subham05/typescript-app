import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { IconButton } from "@common/components/IconButton";
import DynamicFlatList from "@common/components/dynamicFlatlist";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import Header from "@common/components/header";
import HomeworkLoader from "@common/components/skeletonLoaders/homeworkLoader";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import Tab from "@common/components/topTabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { Box, Flex } from "react-native-flex-layout";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { useGetHomeworkListMutation } from "src/store/services/homework";
import HomeworkCard from "./components/homeworkCard";
import { subjectList } from "./constants";
import { useStyles } from "./index.styles";
import { ListItem } from "./interface";
type HomeworkScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const Homework: React.FC<HomeworkScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  const [tab, setTab] = useState(1);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const { scrollY, translateY, handleScroll } = UseScrollAnimation(122);
  const handleTabChange = (tab: number) => {
    setTab(tab);
  };

  const [dropdownValue, setDropdownValue] = useState<string>("All Subject");
  const [getHomeworkList, { data, isLoading }] = useGetHomeworkListMutation();
  useEffect(() => {
    getHomeworkList({ filter: dropdownValue, type: tab, date: date });
  }, [tab, dropdownValue, date]);
  useEffect(() => {
    translateY.value = 0;
    scrollY.value = 0;
  }, [tab]);
  const combinedData: ListItem[] = data?.data ?? [];
  const renderItem = ({ item }: { item: ListItem; index: number }) => {
    return (
      <HomeworkCard
        onPress={() => navigation.navigate("ViewHomework")}
        subject={item.subject}
        subjectTag={item.subjectTag}
        submissionDate={item.submissionDate}
        join={item.join}
        status={item.status}
      />
    );
  };

  return (
    <Container noSpacing>
      <Header
        navigationType="DRAWER"
        title={t("homeworkPage:navigationHeading")}
        RenderRightContainer={() => (
          <IconButton
            name="search"
            size={24}
            onPress={() => navigation.navigate("Search")}
          />
        )}
      />
      <Tab
        tabLeftName={t("homeworkPage:offline")}
        tabRightName={t("homeworkPage:live")}
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
                {t("homeworkPage:date")}
              </TextView>
              <IconView name="calendar" size={18} />
            </TouchableOpacity>
          </Flex>
        </StickyHeaderView>
        {isLoading ? (
          <HomeworkLoader />
        ) : (
          <DynamicFlatList
            space={8}
            itemHeight={130}
            containStyles={styles.containList}
            data={combinedData}
            // loadingMore={isFetching}
            pullRefresh={true}
            // onEnd={() => setOffset(offset + 10)}
            // onRefresh={() => {
            //   setOffset(0);
            // }}
            onScrollHandler={handleScroll}
            emptyTextTitle="No Data"
            renderItem={renderItem}
          />
        )}
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

export default Homework;
