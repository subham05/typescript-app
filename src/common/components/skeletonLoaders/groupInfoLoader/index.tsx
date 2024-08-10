import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";

const GroupInfoLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  const data = Array.from({ length: 10 });
  return (
    <VStack style={styles.rowStyle}>
      <Skeleton color={skeleton_bg} circle width={150} />

      <Skeleton color={skeleton_bg} style={styles.middle} width={"50%"} />

      <Skeleton style={styles.middle} color={skeleton_bg} width={"30%"} />
      <VStack mt={40}>
        {data.map((_, index) => (
          <HStack key={index} pb={16} style={styles.center}>
            <Skeleton
              color={skeleton_bg}
              borderRadius={16}
              width={50}
              height={50}
            />
            <HStack pl={10} spacing={10} style={styles.full}>
              <Skeleton color={skeleton_bg} width={"60%"} />
              <Skeleton color={skeleton_bg} height={30} width={30} />
            </HStack>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default GroupInfoLoader;
