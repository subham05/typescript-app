import { Container } from "@common/components/Container";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import Header from "@common/components/header";
import Search from "@common/components/searchBar";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DatePicker from "react-native-date-picker";
import { Box, HStack, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { useGetMarketplaceListMutation } from "src/store/services/home";
import MarketPlaceCard from "./components/marketPlaceCard";
import { ratingList, sortList, topicList } from "./constants";
import { useStyles } from "./index.styles";
import MarketPlaceLoader from "@common/components/skeletonLoaders/marketplaceLoader";

type PrivateTeachersProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
type DropdownChangeHandler = (item: DropdownItemProps) => void;
const PrivateTeachers: React.FC<PrivateTeachersProps> = () => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  const { scrollY, translateY, handleScroll } = UseScrollAnimation();
  const [dropdownValue, setDropdownValue] = useState<string>("All topics");
  const [dropdownValue1, setDropdownValue1] = useState<string>("Highest");
  const [dropdownValue2, setDropdownValue2] = useState<string>("Ascending");
  const [parentSearch, setParentSearch] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleSearchChange = useCallback((text: string) => {
    setParentSearch(text);
  }, []);
  const data = [
    {
      data: topicList,
      value: dropdownValue,
      setter: setDropdownValue,
    },
    {
      data: ratingList,
      value: dropdownValue1,
      setter: setDropdownValue1,
    },
    {
      data: sortList,
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
  const [getMarketplaceList, { data: marketplaceData, isLoading }] =
    useGetMarketplaceListMutation();
  useEffect(() => {
    getMarketplaceList({
      filter: "someFilter",
      cost: "someCost",
      sort: "someSort",
    });
  }, [dropdownValue, dropdownValue1, dropdownValue2]);

  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("privateTeachersPage:navigationHeading")}
      />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Search search={parentSearch} onSearchChange={handleSearchChange} />
          <HStack style={styles.filterScroll} spacing={10}>
            {data.map(({ data, value, setter }, index) => (
              <FilterDropdown
                key={index}
                data={data}
                placeholder={t("common:select")}
                value={value}
                onChange={handleDropdownChange(setter)}
              />
            ))}
          </HStack>
        </StickyHeaderView>
        {isLoading ? (
          <MarketPlaceLoader />
        ) : (
          <Animated.FlatList
            onScroll={handleScroll}
            contentContainerStyle={styles.containList}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={() => <Spacer p={8} />}
            data={marketplaceData?.data}
            renderItem={({ item }) => (
              <MarketPlaceCard
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                authorName={item.authorName}
                time={item.time}
                rating={item.rating}
                price={item.price}
                onPress={() => {}}
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

export default PrivateTeachers;
