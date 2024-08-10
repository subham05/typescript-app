import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import Header from "@common/components/header";
import Search from "@common/components/searchBar";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import useScreenDimensions from "@common/utils/responsiveDimensions";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { Box, Flex, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import EarningCard from "./components/earningCard";
import TransactionCard from "./components/transactionCard";
import { ctaList, dummyTransaction, subjectList } from "./constants";
import { useStyles } from "./index.styles";

type EarningsProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};

const Earnings: React.FC<EarningsProps> = () => {
  const { t } = useTranslation();
  const { styles } = useStyles({});

  const { scrollY, translateY, handleScroll } = UseScrollAnimation();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState<string>();
  const [parentSearch, setParentSearch] = useState("");
  const handleSearchChange = useCallback((text: string) => {
    setParentSearch(text);
  }, []);
  const { width } = useScreenDimensions();
  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={"Earnings"} />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Search search={parentSearch} onSearchChange={handleSearchChange} />
          <Flex direction="row" style={styles.recording}>
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
        {/* <EarningLoader /> */}
        <Animated.FlatList
          onScroll={handleScroll}
          contentContainerStyle={styles.containList}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <Spacer p={8} />}
          data={dummyTransaction}
          ListHeaderComponent={() => (
            <Animated.FlatList
              showsHorizontalScrollIndicator={false}
              data={ctaList}
              horizontal
              contentContainerStyle={styles.topCtas}
              ItemSeparatorComponent={() => <Spacer ph={8} />}
              renderItem={({ item }) => (
                <EarningCard
                  width={width}
                  title={item.title}
                  start={item.startColor}
                  end={item.endColor}
                  earning={item.earning}
                />
              )}
            />
          )}
          renderItem={({ item }) => (
            <TransactionCard
              name={item.name}
              type={item.type}
              date={item.date}
              amountPaid={item.amountPaid}
              transactionId={item.transactionId}
              adminShare={item.adminShare}
              tutorShare={item.tutorShare}
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

export default Earnings;
