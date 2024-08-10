import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import Header from "@common/components/header";
import Search from "@common/components/searchBar";
import { DropdownItemProps } from "@common/components/selectInputDropdown/types";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { Box, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import StudentCard from "./components/studentCard";
import { courseList, statusList, studentsList, typeList } from "./constants";
import { useStyles } from "./index.styles";

type StudentsProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    StackNavigationProp<SignedInStackPrivateParamList>
  >;
};
type DropdownChangeHandler = (item: DropdownItemProps) => void;
const Students: React.FC<StudentsProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  const { scrollY, translateY, handleScroll } = UseScrollAnimation();
  const [dropdownValue, setDropdownValue] = useState<string>("Course");
  const [dropdownValue1, setDropdownValue1] = useState<string>("Course type");
  const [dropdownValue2, setDropdownValue2] = useState<string>("Status");
  const [parentSearch, setParentSearch] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleSearchChange = useCallback((text: string) => {
    setParentSearch(text);
  }, []);
  const data = [
    {
      data: courseList,
      value: dropdownValue,
      setter: setDropdownValue,
    },
    {
      data: typeList,
      value: dropdownValue1,
      setter: setDropdownValue1,
    },
    {
      data: statusList,
      value: dropdownValue2,
      setter: setDropdownValue2,
    },
  ];
  const handleDropdownChange = useCallback(
    (valueSetter: (value: string) => void): DropdownChangeHandler => {
      return (item) => {
        valueSetter(item.value);
      };
    },
    []
  );

  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={"Students"} />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Search search={parentSearch} onSearchChange={handleSearchChange} />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterScroll}
          >
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
          </ScrollView>
        </StickyHeaderView>
        {/* <StudentsLoader /> */}
        <Animated.FlatList
          onScroll={handleScroll}
          contentContainerStyle={styles.containList}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <Spacer p={8} />}
          data={studentsList}
          renderItem={({ item }) => (
            <StudentCard
              name={item.name}
              className={item.class}
              tags={item.tags}
              joining={item.joining}
              fees={item.fees}
              profileImg={item.profileImg}
              onPress={() => navigation.navigate("StudentView")}
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

export default Students;
