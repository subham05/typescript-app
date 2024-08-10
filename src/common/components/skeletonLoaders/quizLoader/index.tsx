import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import CustomFlatListLoader from "../flatListLoader";
import { useStyles } from "./index.styles";

const QuizLoader: React.FC = () => {
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
            width={50}
            height={60}
            borderRadius={10}
          />
          <VStack pl={10} spacing={5} style={styles.full}>
            <HStack justify="between">
              <Skeleton color={skeleton_bg} width={"70%"} />
              <Skeleton color={skeleton_bg} width={40} />
            </HStack>

            <Skeleton color={skeleton_bg} width={"40%"} />
            <Skeleton color={skeleton_bg} width={"50%"} />
          </VStack>
        </HStack>
      )}
    />
  );
};

export default QuizLoader;
