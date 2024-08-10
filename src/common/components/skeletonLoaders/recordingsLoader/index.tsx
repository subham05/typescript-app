import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import CustomFlatListLoader from "../flatListLoader";
import { useStyles } from "./index.styles";

const RecordingLoader: React.FC = () => {
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
      RenderItem={() => (
        <HStack style={styles.rowStyle}>
          <VStack spacing={5} style={styles.full}>
            <Skeleton
              color={skeleton_bg}
              borderRadius={16}
              width={"100%"}
              height={250}
            />
            <HStack mt={10} spacing={10} justify="between">
              <Skeleton color={skeleton_bg} width={"50%"} />
              <Skeleton color={skeleton_bg} width={"10%"} />
            </HStack>
            <HStack mt={10} spacing={10} justify="between">
              <Skeleton color={skeleton_bg} width={"30%"} />
              <Skeleton color={skeleton_bg} width={"20%"} />
            </HStack>
          </VStack>
        </HStack>
      )}
    />
  );
};

export default RecordingLoader;
