import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import Header from "@common/components/header";
import Search from "@common/components/searchBar";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { Box, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { useGetAnnouncementListMutation } from "src/store/services/home";
import AnnouncementCard from "./components/announcementCard";
import { filterList } from "./constants";
import { useStyles } from "./index.styles";
import ImportantAnnouncementLoader from "@common/components/skeletonLoaders/importantAnnouncement";

type AnnouncementScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const ImportantAnnouncement: React.FC<AnnouncementScreenProps> = () => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  const [dropdownValue, setDropdownValue] = useState<string>("Newest");
  const [parentSearch, setParentSearch] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const { scrollY, translateY, handleScroll } = UseScrollAnimation();
  const handleSearchChange = useCallback((text: string) => {
    setParentSearch(text);
  }, []);
  const [getAnnouncementList, { data, isLoading }] =
    useGetAnnouncementListMutation();
  useEffect(() => {
    // Fetch the announcement list when the component mounts
    getAnnouncementList({ filter: dropdownValue, date: date });
  }, [dropdownValue, date]);
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("importantAnnouncementPage:navigationHeading")}
      />
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
        {isLoading ? (
          <ImportantAnnouncementLoader />
        ) : (
          <Animated.FlatList
            onScroll={handleScroll}
            contentContainerStyle={styles.containList}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={() => <Spacer p={8} />}
            data={data?.data}
            renderItem={({ item }) => (
              <AnnouncementCard
                title={item.title}
                description={item.description}
                linkTitle={item.linkTitle}
                link={item.link}
                poster={item.poster}
                file={item.file}
              />
            )}
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

export default ImportantAnnouncement;
