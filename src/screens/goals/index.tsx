import { Container } from "@common/components/Container";
import BottomButtons from "@common/components/bottomButtons";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, HStack, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import SVGComponents from "src/assets/svg";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import GoalGroup from "./components/groupCard";
import { goalsGroupList } from "./constants";
import { useStyles } from "./index.styles";

type GoalsScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};

export type DataProps = {
  checked: boolean | undefined;
  index: React.Key | null | undefined;
  taskName: string | undefined;
  completeDate: string | undefined;
};
export type Goal = {
  index: number;
  name: string;
  teacher: string;
  data: DataProps[];
};

const Goals: React.FC<GoalsScreenProps> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [values, setValues] = useState(goalsGroupList);
  const [allChecked, setAllChecked] = useState(false);
  const width = "30%";

  useEffect(() => {
    const areAllChecked = values.every((group) =>
      group.data.every((task) => task.checked)
    );
    setAllChecked(areAllChecked);
  }, [values]);

  const handleToggle = (groupIndex: number, taskIndex: number) => {
    setValues((prevValues) =>
      prevValues.map((group, i) =>
        i === groupIndex
          ? {
              ...group,
              data: group.data.map((task, j) =>
                j === taskIndex ? { ...task, checked: !task.checked } : task
              ),
            }
          : group
      )
    );
  };
  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={t("goalsPage:navigationHeading")} />
      {/* {<GoalsLoader />} */}
      <Animated.FlatList
        onScroll={handleScroll}
        data={values}
        contentContainerStyle={styles.listContain}
        ItemSeparatorComponent={() => <Spacer pb={12} />}
        ListHeaderComponent={() => (
          <>
            <TextView variant="light" style={styles.heading}>
              {t("goalsPage:head")}
            </TextView>
            <HStack mt={12} mb={18} spacing={10} style={styles.goalsBox}>
              <Box style={[styles.variableWidth, { width: width }]} />
              <SVGComponents.GoalsImg />
              <TextView style={styles.goalsCount}>
                {t("goalsPage:subTitle")}
              </TextView>
            </HStack>
          </>
        )}
        renderItem={({ item: group }) => (
          <GoalGroup
            group={group}
            toggleChecked={handleToggle}
            values={values}
          />
        )}
      />
      <BottomButtons
        primaryButtonTitle={t("common:submit")}
        onPrimaryButtonClick={() => {}}
        isDisablePrimaryButton={allChecked ? false : true}
        boxStyle={styles.boxStyle}
        isDisableSecondaryButton={true}
      />
    </Container>
  );
};

export default Goals;
