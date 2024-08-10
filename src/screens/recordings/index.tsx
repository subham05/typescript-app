import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import Search from "@common/components/searchBar";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { Box, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import RecordingCard from "./components/recordingCard";
import { filterList, videoCardData } from "./constants";
import { useStyles } from "./index.styles";

type RecordingsProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const Recordings: React.FC<RecordingsProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  const [dropdownValue, setDropdownValue] = useState<string>("All subjects");
  const [parentSearch, setParentSearch] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const { scrollY, translateY, handleScroll } = UseScrollAnimation();
  const handleSearchChange = useCallback((text: string) => {
    setParentSearch(text);
  }, []);
  const handleRecordingCardChange = () => {};
  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={t("recordingPage:navigationHeading")} />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Search search={parentSearch} onSearchChange={handleSearchChange} />
          <Box style={styles.recording}>
            <FilterDropdown
              style={styles.subjectFilter}
              data={filterList}
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
          </Box>
        </StickyHeaderView>
        {/* <RecordingLoader /> */}
        <Animated.FlatList
          onScroll={handleScroll}
          contentContainerStyle={styles.containList}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <Spacer p={8} />}
          data={videoCardData}
          renderItem={({ item }) => (
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
          )}
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

export default Recordings;
