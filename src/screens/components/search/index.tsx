import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import { _isIOS } from "@common/utils/platformCheck";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  CompositeNavigationProp,
  useIsFocused,
} from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";

import Search from "@common/components/searchBar";
import { useStyles } from "./index.styles";
type HomeworkScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const SearchScreen: React.FC<HomeworkScreenProps> = () => {
  const { styles } = useStyles({});
  const [parentSearch, setParentSearch] = useState("");
  const isFocused = useIsFocused();
  const handleSearchChange = (text: string) => {
    setParentSearch(text);
  };

  return (
    <Container noSpacing>
      <KeyboardAvoidingView
        style={styles.keyBoardContainer}
        behavior={_isIOS ? "padding" : undefined}
      >
        <Header />
        <Search
          autoFocus={isFocused}
          search={parentSearch}
          onSearchChange={handleSearchChange}
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SearchScreen;
