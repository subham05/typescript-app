import React from "react";
import { ScrollView } from "react-native";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";

const EarningLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  return (
    <ScrollView contentContainerStyle={styles.listStyle}>
      <HStack spacing={16} style={styles.rowStyle}>
        <Skeleton
          width={130}
          borderRadius={24}
          color={skeleton_bg}
          height={152}
        />
        <Skeleton
          width={130}
          borderRadius={24}
          color={skeleton_bg}
          height={152}
        />
        <Skeleton
          width={130}
          borderRadius={24}
          color={skeleton_bg}
          height={152}
        />
      </HStack>
      <VStack spacing={16} mt={24} style={styles.rowStyle}>
        <Skeleton
          width={"100%"}
          borderRadius={24}
          color={skeleton_bg}
          height={190}
        />
        <Skeleton
          width={"100%"}
          borderRadius={24}
          color={skeleton_bg}
          height={190}
        />
        <Skeleton
          width={"100%"}
          borderRadius={24}
          color={skeleton_bg}
          height={190}
        />
      </VStack>
    </ScrollView>
  );
};

export default EarningLoader;
