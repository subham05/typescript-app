import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";
import { ScrollView } from "react-native";

const DetailsLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  return (
    <ScrollView contentContainerStyle={styles.listStyle}>
      <VStack spacing={20} mt={10} style={styles.full}>
        <HStack style={styles.rowStyle}>
          <Skeleton
            color={skeleton_bg}
            borderRadius={20}
            width={50}
            height={50}
          />
          <VStack pl={10} spacing={10} style={styles.rowStyleContainer}>
            <Skeleton color={skeleton_bg} width={"90%"} />
            <Skeleton color={skeleton_bg} width={"50%"} />
          </VStack>
        </HStack>
        <HStack mt={20} spacing={10}>
          <Skeleton color={skeleton_bg} circle width={24} />
          <VStack spacing={10} w={"80%"}>
            <Skeleton color={skeleton_bg} width={"40%"} />
            <Skeleton color={skeleton_bg} width={"100%"} />
          </VStack>
        </HStack>
        <HStack mt={28} spacing={10}>
          <Skeleton color={skeleton_bg} circle width={24} />
          <VStack spacing={10} w={"80%"}>
            <Skeleton color={skeleton_bg} width={"40%"} />
            <Skeleton color={skeleton_bg} width={"100%"} />
          </VStack>
        </HStack>
        <HStack mt={28} spacing={10}>
          <Skeleton color={skeleton_bg} circle width={24} />
          <VStack spacing={10} w={"90%"}>
            <Skeleton color={skeleton_bg} width={"60%"} />
            <Skeleton color={skeleton_bg} height={160} width={"100%"} />
          </VStack>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default DetailsLoader;
