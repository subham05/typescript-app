import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import CustomFlatListLoader from "../flatListLoader";
import { useStyles } from "./index.styles";

const HomeworkLoader: React.FC = () => {
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
          <Skeleton color={skeleton_bg} circle width={60} />
          <VStack pl={10} spacing={5} style={styles.full}>
            <Skeleton color={skeleton_bg} width={"90%"} />
            <Skeleton color={skeleton_bg} width={"40%"} />
            <Skeleton color={skeleton_bg} width={"60%"} />
          </VStack>
        </HStack>
      )}
    />
  );
};

export default HomeworkLoader;
