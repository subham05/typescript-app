import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Flex, VStack } from "react-native-flex-layout";

import { useNavigation } from "@react-navigation/native";
import { MenuActions } from "./enum";
import { useStyles } from "./index.styles";
import { DrawerItemNavigationProp, useIcons } from "./menuItemHook";
export type DrawerItemProps = {
  title?: string;
  subTitle?: string;
  onPress?: () => void;
};
export const DrawerItem: React.FC<DrawerItemProps> = ({ title, subTitle }) => {
  const { icons, handlePress, show, t } = useIcons();
  const { styles } = useStyles({});
  const iconInfo = title ? icons[title] : undefined;
  const navigation = useNavigation<DrawerItemNavigationProp>();
  return (
    <>
      <TouchableOpacity
        onPress={() => handlePress(title)}
        style={[styles.cardContain, show && styles.reportStyle]}
      >
        {iconInfo && (
          <IconView size={24} color={iconInfo.color} name={iconInfo.name} />
        )}
        <Box w={"90%"} pl={16}>
          <Box>
            <TextView variant="medium" style={styles.heading}>
              {t(`drawer:${title}`)}
            </TextView>
            {subTitle && (
              <TextView style={styles.description}>
                {t(`drawer:${subTitle}`)}
              </TextView>
            )}
          </Box>
        </Box>
      </TouchableOpacity>
      {show && title == MenuActions.reports && (
        <>
          <Box style={styles.line} />
          <VStack spacing={19} style={styles.borderTop}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReportAttendance")}
            >
              <Flex direction="row" style={styles.reportList}>
                <IconView name="analytics_up" size={18} />
                <TextView variant="medium" style={styles.reportSubText}>
                  {t("drawer:attendanceSubMenu")}
                </TextView>
              </Flex>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReportPerformance")}
            >
              <Flex direction="row" style={styles.reportList}>
                <IconView name="performance" size={18} />
                <TextView variant="medium" style={styles.reportSubText}>
                  {t("drawer:performanceSubMenu")}
                </TextView>
              </Flex>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ExamReport")}>
              <Flex direction="row" style={styles.reportList}>
                <IconView name="exam" size={18} />
                <TextView variant="medium" style={styles.reportSubText}>
                  {t("drawer:examSubMenu")}
                </TextView>
              </Flex>
            </TouchableOpacity>
          </VStack>
        </>
      )}
    </>
  );
};
