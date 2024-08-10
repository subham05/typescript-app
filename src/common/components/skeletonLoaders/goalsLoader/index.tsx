import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import CustomFlatListLoader from "../flatListLoader";
import { useStyles } from "./index.styles";

const GoalsLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  return (
    <CustomFlatListLoader
      count={3}
      flatListStyle={styles.listStyle}
      ListHeaderComponent={() => (
        <VStack spacing={10} ph={20} pb={24}>
          <Skeleton color={skeleton_bg} width={"60%"} />
          <Skeleton
            color={skeleton_bg}
            borderRadius={10}
            height={36}
            width={"100%"}
          />
        </VStack>
      )}
      RenderItem={() => (
        <HStack style={styles.rowStyle}>
          <VStack spacing={5} style={styles.full}>
            <Skeleton color={skeleton_bg} width={"90%"} />
            <Skeleton color={skeleton_bg} width={"60%"} />
            <HStack mt={20} spacing={10}>
              <Skeleton color={skeleton_bg} circle width={20} />
              <VStack spacing={5} w={"80%"}>
                <Skeleton color={skeleton_bg} width={"60%"} />
                <Skeleton color={skeleton_bg} width={"90%"} />
              </VStack>
            </HStack>
            <HStack mt={20} spacing={10}>
              <Skeleton color={skeleton_bg} circle width={20} />
              <VStack spacing={5} w={"80%"}>
                <Skeleton color={skeleton_bg} width={"60%"} />
                <Skeleton color={skeleton_bg} width={"90%"} />
              </VStack>
            </HStack>
            <HStack mt={10} spacing={10} justify="end">
              <Skeleton color={skeleton_bg} height={30} width={"30%"} />
            </HStack>
          </VStack>
        </HStack>
      )}
    />
  );
};

export default GoalsLoader;
