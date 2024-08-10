import React from "react";
import { ScrollView } from "react-native";
import { HStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";

const ResourceLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  return (
    <ScrollView contentContainerStyle={styles.listStyle}>
      <HStack mb={12} spacing={16} style={styles.rowStyle}>
        <Skeleton width={100} />
      </HStack>
      <HStack spacing={16} style={styles.rowStyle}>
        <Skeleton
          width={270}
          borderRadius={28}
          color={skeleton_bg}
          height={190}
        />
        <Skeleton
          width={270}
          borderRadius={28}
          color={skeleton_bg}
          height={190}
        />
      </HStack>
      <HStack mb={12} mt={36} spacing={16} style={styles.rowStyle}>
        <Skeleton width={100} />
      </HStack>
      <HStack spacing={16} style={styles.rowStyle}>
        <Skeleton
          width={240}
          borderRadius={28}
          color={skeleton_bg}
          height={160}
        />
        <Skeleton
          width={240}
          borderRadius={28}
          color={skeleton_bg}
          height={160}
        />
      </HStack>
      <HStack mb={12} mt={36} spacing={16} style={styles.rowStyle}>
        <Skeleton width={100} />
      </HStack>
      <HStack spacing={16} style={styles.rowStyle}>
        <Skeleton
          width={270}
          borderRadius={24}
          color={skeleton_bg}
          height={70}
        />
        <Skeleton
          width={270}
          borderRadius={24}
          color={skeleton_bg}
          height={70}
        />
      </HStack>
    </ScrollView>
  );
};

export default ResourceLoader;
