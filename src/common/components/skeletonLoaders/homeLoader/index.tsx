import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";
import { ScrollView } from "react-native";

const HomeLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  const data = Array.from({ length: 6 });
  return (
    <ScrollView contentContainerStyle={styles.listStyle}>
      <Skeleton
        color={skeleton_bg}
        height={150}
        borderRadius={28}
        width={"100%"}
      />
      <HStack style={styles.rowStyle}>
        <Skeleton
          width={"48%"}
          borderRadius={28}
          color={skeleton_bg}
          height={160}
        />
        <Skeleton
          width={"48%"}
          borderRadius={24}
          color={skeleton_bg}
          height={160}
        />
      </HStack>
      <HStack justify="between" mb={10}>
        <Skeleton color={skeleton_bg} width={"30%"} />
        <Skeleton color={skeleton_bg} width={"10%"} />
      </HStack>
      {data.map((_, index) => (
        <HStack mv={5} key={index} style={styles.rowListStyle}>
          <Skeleton color={skeleton_bg} circle width={60} />
          <VStack pl={10} spacing={5} style={styles.full}>
            <Skeleton color={skeleton_bg} width={"90%"} />
            <Skeleton color={skeleton_bg} width={"60%"} />
          </VStack>
        </HStack>
      ))}
    </ScrollView>
  );
};

export default HomeLoader;
