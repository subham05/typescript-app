import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import CustomFlatListLoader from "../flatListLoader";
import { useStyles } from "./index.styles";

const FeedbackLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  return (
    <CustomFlatListLoader
      count={12}
      flatListStyle={styles.listStyle}
      RenderItem={() => (
        <HStack style={styles.rowStyle}>
          <Skeleton
            color={skeleton_bg}
            width={90}
            height={90}
            borderRadius={20}
          />
          <VStack pl={10} spacing={10} style={styles.full}>
            <Skeleton color={skeleton_bg} width={"60%"} />
            <Skeleton color={skeleton_bg} width={"30%"} />
            <Skeleton color={skeleton_bg} width={"50%"} />
          </VStack>
        </HStack>
      )}
    />
  );
};

export default FeedbackLoader;
