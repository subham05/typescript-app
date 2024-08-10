import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageProps,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Box, HStack, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import MemberAddCard from "./components/memberAddCard";
import MemberCard from "./components/memberCard";
import { groupListAll } from "./constants";
import { useStyles } from "./index.styles";
import Search from "./components/search";
type GroupInfoScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
type GroupListItem = {
  index: number;
  thumbnail: ImageProps;
  name: string;
  selected: boolean;
};
const AddMember: React.FC<GroupInfoScreenProps> = () => {
  const { styles } = useStyles({});
  const [parentSearch, setParentSearch] = useState("");
  const [show, setShow] = useState(false);
  const { scrollY, handleScroll } = UseScrollAnimation(62);
  const [groupList, setGroupList] = useState<GroupListItem[]>(groupListAll);
  const [addedList, setAddedList] = useState<GroupListItem[]>([]);
  useEffect(() => {
    const updatedAddedList = groupList.filter((item) => item.selected);
    setAddedList(updatedAddedList);
  }, [groupList]);

  const handlePress = (index: number) => {
    setGroupList((prevGroupList) => {
      const updatedGroupList = [...prevGroupList];
      updatedGroupList[index].selected = !updatedGroupList[index].selected;

      return updatedGroupList;
    });
  };

  const handleRemove = (dataIndex: number) => {
    setGroupList((prevGroupList) => {
      const updatedGroupList = prevGroupList.map((item) => {
        if (item.index === dataIndex) {
          return { ...item, selected: false };
        }
        return item;
      });
      return updatedGroupList;
    });
  };
  const handleSearchChange = (text: string) => {
    setParentSearch(text);
  };
  return (
    <Container noSpacing>
      <KeyboardAvoidingView style={styles.keyBoardStyle}>
        <Header scroll={scrollY} title={"Add members"} />
        <Animated.FlatList
          ListHeaderComponent={() => (
            <>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={addedList}
                horizontal
                contentContainerStyle={[
                  styles.topCtas,
                  addedList.length == 0 && styles.disable,
                ]}
                ItemSeparatorComponent={() => <Spacer ph={8} />}
                renderItem={({ item }) => (
                  <MemberAddCard
                    image={item.thumbnail}
                    onPress={() => handleRemove(item.index)}
                  />
                )}
              />
              <HStack pt={20} pb={24} ph={20} justify="between">
                {show ? (
                  <Search
                    search={parentSearch}
                    onSearchChange={handleSearchChange}
                  />
                ) : (
                  <TextView style={styles.participants}>Suggested</TextView>
                )}
                <IconButton
                  onPress={() => setShow(!show)}
                  name={show ? "remove" : "search"}
                  size={24}
                />
              </HStack>
            </>
          )}
          onScroll={handleScroll}
          keyExtractor={(_, index) => index.toString()}
          data={groupList}
          contentContainerStyle={styles.containList}
          ItemSeparatorComponent={() => <Spacer pt={24} />}
          renderItem={({ item, index }) => (
            <MemberCard
              image={item.thumbnail}
              name={item.name}
              selected={item.selected}
              onPress={() => handlePress(index)}
            />
          )}
        />
      </KeyboardAvoidingView>
      <Box style={styles.fixed} ph={20}>
        <TouchableOpacity onPress={() => {}} style={styles.primaryBtn}>
          <TextView variant="medium" style={styles.primaryTxt}>
            {"Done"}
          </TextView>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default AddMember;
