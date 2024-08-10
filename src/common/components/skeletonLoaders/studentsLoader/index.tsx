import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import CustomFlatListLoader from "../flatListLoader";
import { useStyles } from "./index.styles";

const StudentsLoader: React.FC = () => {
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
            borderRadius={17}
            width={60}
            height={70}
          />
          <VStack pl={10} spacing={10} style={styles.full}>
            <Skeleton color={skeleton_bg} width={"90%"} />
            <Skeleton color={skeleton_bg} width={"60%"} />
            <Skeleton color={skeleton_bg} width={"70%"} />
          </VStack>
        </HStack>
      )}
    />
  );
};

export default StudentsLoader;
